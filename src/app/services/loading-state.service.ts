import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingStateService {
  private isLoadingSignal = signal(false);

  public isLoading = computed(() => this.isLoadingSignal());

  constructor() { }

  public set loading(value: boolean) {
    this.isLoadingSignal.set(value)
  }
}
