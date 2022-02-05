import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TagsComponent
    }
  ]
})
export class TagsComponent implements ControlValueAccessor {
  @Input() label!: string;
  @ViewChild('addInput') addInput!: ElementRef<HTMLInputElement>;
  tags: string[] = [];

  touched = false;
  disabled = false;

  writeValue(tags: string[]) {
    this.tags = tags;
  }

  onChange: (tags: string[]) => void = () => {
  };

  onTouched = () => {
  };

  registerOnChange(onChange: () => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  removeTag(tag: string): void {
    this.markAsTouched();
    if (this.disabled) {
      return;
    }

    const tagIndex = this.tags.indexOf(tag);
    this.tags.splice(tagIndex, 1);
    this.onChange(this.tags);
  }

  addTag(tag: string): void {
    this.markAsTouched();
    if (this.disabled || tag === '') {
      return;
    }

    this.tags.push(tag);
    this.onChange(this.tags);
    this.addInput.nativeElement.value = '';
  }

}
