import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'emr-chip',
  styleUrl: 'style.scss',
  shadow: true
})
export class EMRChip {
  @Prop() label: string;
  @Event() remove: EventEmitter;

  handleRemove = () => {
    console.log('removido');
    this.remove.emit();
  }

  render() {
    return (
      <div class="chip">
        <span>{this.label}</span>
        <button onClick={this.handleRemove}>
          <span aria-label="Close">&times;</span>
        </button>
      </div>
    );
  }
}