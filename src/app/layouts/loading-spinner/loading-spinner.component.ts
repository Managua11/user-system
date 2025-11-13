import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';
import { LoadingStateService } from '../../services/loading-state.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProgressBar]
})
export class LoadingSpinnerComponent {
  constructor(public loadingStateService: LoadingStateService) { }
}
