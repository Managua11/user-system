import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PostWithUserName } from '../../../models/posts.model';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details-card',
  templateUrl: './user-post-details-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardModule]
})
export class PostDetailsCardComponent {
  @Input() post: PostWithUserName;

  @Output() onClose = new EventEmitter<void>();
}
