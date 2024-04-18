import { Component, Event, EventEmitter, Listen, Method, Prop, h } from "@stencil/core";

@Component({
    tag: "material-button",
    styleUrl: "material-button.scss",
    scoped: true
})
export class MaterialButton {
    @Prop() label: string;
    @Prop() primary: boolean;
    @Prop() secondary: boolean;
    @Prop() high__emphasis: boolean;
    @Prop() medium__emphasis: boolean;
    @Prop() low__emphasis: boolean;
    @Prop() icon: string;
    @Prop() disabled: boolean;

    @Method() 
    async clicked() {
        console.log('clicked');
    }

    @Listen('click')
    async handleClick() {
        this.buttonClicked.emit('clicked');
    }

    @Event()
    buttonClicked: EventEmitter;
    
    render() {
        return (
            <button 
                onClick={async () => this.clicked()}  
                disabled={this.disabled}
                class={{
                    'primary': this.primary,
                    'secondary': this.secondary,
                    'high__emphasis': this.high__emphasis,
                    'medium__emphasis': this.medium__emphasis,
                    'low__emphasis': this.low__emphasis
                }}
            >
                <div class="inner__button">
                {this.icon && <emerson-icon style={{ height: '24px' }} name={this.icon} size="24px"></emerson-icon>}
                {this.label}
                </div>
            </button>
        );
    }
}