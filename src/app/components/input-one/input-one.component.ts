import { Component } from '@angular/core';

@Component({
  selector: 'app-input-one',
  templateUrl: './input-one.component.html',
  styleUrls: ['./input-one.component.css']
})
export class InputOneComponent {
  selectedImage: string | ArrayBuffer | null = null;

  handleImageUpload(event: Event): void {
      const inputElement = event.target as HTMLInputElement;
      const file = inputElement.files?.[0];

      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              this.selectedImage = e.target?.result as string | ArrayBuffer;
          };
          reader.readAsDataURL(file);
      }
  }
}