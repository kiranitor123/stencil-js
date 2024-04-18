import { Component, Fragment, Method, Prop, h } from "@stencil/core";

@Component({
    tag: "emerson-banner",
    styleUrl: "banner.scss",
    scoped: true
})
export class EmersonBanner {
    @Prop() action: boolean = true;

    @Method()
    async close() {
        console.log('closed');
    }

    render() {
        return (
            <Fragment>
            <div class="banner">
                <div class="banner__content">
                    <div class="d-flex">
                    <emerson-icon style={{ height: '16px' }} name="info" size="16px"></emerson-icon>
                    <slot></slot>
                    </div>
                    <div class="d-flex">
                    {this.action && <a href="#">Click here</a>}
                    <emerson-icon style={{ height: '16px' }} onClick={async () => this.close()} size="16px" name="close"></emerson-icon>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}