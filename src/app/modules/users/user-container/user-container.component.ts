import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersApiService } from "../services/users-api.service";
import { map, Observable, combineLatest } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserContainerComponent implements OnInit {
  data$: Observable<any[]> | undefined;

  private tag: string;

  constructor(private usersHttp: UsersApiService, private routerSnapshot: ActivatedRoute) {
    this.tag = this.routerSnapshot.snapshot.queryParams['tag'];
  }

  ngOnInit(): void {
    this.data$ = combineLatest([this.routerSnapshot.queryParams.pipe(map(({tag}) => tag)),
      this.usersHttp.getData()]).pipe(
        map(([tag, data]) => data.filter((dataItem) => {
          if(tag === '0' && dataItem.type == 'income') return true;
          if(tag === '1' && dataItem.type == 'outcome') return true;
          if(tag === '2' && dataItem.type == 'loans') return true;
          if(tag === '3' && dataItem.type == 'investments') return true;
        })),
    );
  }

}
