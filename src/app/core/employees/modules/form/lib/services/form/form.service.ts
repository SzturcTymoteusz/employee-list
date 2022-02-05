import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Form} from "./form";
import {url} from "../../validators/url";
import {emailUniqueness} from "../../validators/email-uniqueness";
import {ManageDataStore} from "../../../../../lib/services/manage-data-store/manage-data-store";

@Injectable()
export class FormService implements Form {
  private _form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    avatarUrl: new FormControl('http://placehold.it/32x32', [Validators.required, url()]),
    email: new FormControl(null, [Validators.required, Validators.email], [emailUniqueness(this.manageDataStore.checkEmailUniqueness())]),
    phone: new FormControl(null, [Validators.required]),
    tags: new FormControl([]),
    about: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    id: new FormControl(null),
    createdAt: new FormControl(null),
  })

  constructor(private manageDataStore: ManageDataStore) {
  }

  get form(): FormGroup {
    return this._form;
  }

  get name(): FormControl {
    return this._form.get('name') as FormControl;
  }

  get company(): FormControl {
    return this._form.get('company') as FormControl;
  }

  get avatarUrl(): FormControl {
    return this._form.get('avatarUrl') as FormControl;
  }

  get email(): FormControl {
    return this._form.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this._form.get('phone') as FormControl;
  }

  get tags(): FormControl {
    return this._form.get('tags') as FormControl;
  }

  get about(): FormControl {
    return this._form.get('about') as FormControl;
  }

  get address(): FormControl {
    return this._form.get('address') as FormControl;
  }

  get id(): FormControl {
    return this._form.get('id') as FormControl;
  }

  get createdAt(): FormControl {
    return this._form.get('createdAt') as FormControl;
  }

  reset() {
    this._form.reset({
      name: null,
      company: null,
      avatarUrl: 'http://placehold.it/32x32',
      email: null,
      phone: null,
      tags: [],
      about: null,
      address: null,
      id: null,
      createdAt: null,
    })
  }
}
