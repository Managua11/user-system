import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, OnInit, signal } from '@angular/core';
import { debounceTime, Observable, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { Button } from "primeng/button";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IconField } from "primeng/iconfield";
import { InputIcon, InputIconModule } from "primeng/inputicon";
import { InputTextModule } from 'primeng/inputtext';
import { Unsubscriber } from '../../helpers/unsubscriber';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/users.model';
import { DataHttpService } from '../../services/data-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    Button,
    RouterLink,
    IconField,
    InputIcon,
    InputTextModule,
    InputIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataHttpService]
})
export class UsersComponent extends Unsubscriber implements OnInit {
  public users$: Observable<User[]>;

  public form: FormGroup;

  public headers = [
    'Name',
    'Username',
    'Phone',
    'Email',
    'Company',
  ];

  constructor(
    private dataHttpService: DataHttpService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.initUsers();
    this.initForm();
    this.listenSearchChange();
  }

  private initUsers() {
    const searchParam = this.route.snapshot.queryParams['search'];
    this.users$ = this.dataHttpService.getUsers(searchParam);
  }

  private initForm() {
    this.form = new FormGroup({
      search: new FormControl(this.route.snapshot.queryParams['search'] || '')
    });
  }

  private listenSearchChange() {
    this.form.get('search')?.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(500),
    ).subscribe(value => {
      this.serachUser(value);
      this.setSearchQuery(value);
      this.cdr.markForCheck();
    });
  }

  private serachUser(searchValue: string) {
    searchValue = searchValue.toLowerCase();
    this.users$ = this.dataHttpService.getUsers(searchValue);
  }

  private setSearchQuery(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: value || null
      },
      queryParamsHandling: 'merge',
    });
  }
}
