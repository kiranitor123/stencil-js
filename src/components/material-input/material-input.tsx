import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'material-input',
  styleUrl: 'material-input.css',
  scoped: true,
})
export class MaterialInput {
  @Prop() placeholder: string;
  @Prop() label: string;
  render() {
    return (
      <label>
        <input placeholder={this.placeholder} />
        <span>{this.label}</span>
      </label>
    );
  }
}
