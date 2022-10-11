import React from 'react';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from './utils/polymorphic';
import { Merge } from './utils/types';
import { StyledWrapperProps } from './_TextInputWrapper';
export declare type TextInputNonPassthroughProps = {
    /** @deprecated Use `leadingVisual` or `trailingVisual` prop instead */
    icon?: React.ComponentType<React.PropsWithChildren<{
        className?: string;
    }>>;
    /** Whether the to show a loading indicator in the input */
    loading?: boolean;
    /**
     * Which position to render the loading indicator
     * 'auto' (default): at the end of the input, unless a `leadingVisual` is passed. Then, it will render at the beginning
     * 'leading': at the beginning of the input
     * 'trailing': at the end of the input
     **/
    loaderPosition?: 'auto' | 'leading' | 'trailing';
    /**
     * A visual that renders inside the input before the typing area
     */
    leadingVisual?: string | React.ComponentType<React.PropsWithChildren<{
        className?: string;
    }>>;
    /**
     * A visual that renders inside the input after the typing area
     */
    trailingVisual?: string | React.ComponentType<React.PropsWithChildren<{
        className?: string;
    }>>;
    /**
     * A visual that renders inside the input after the typing area
     */
    trailingAction?: React.ReactElement<React.HTMLProps<HTMLButtonElement>>;
} & Pick<StyledWrapperProps, 'block' | 'contrast' | 'disabled' | 'monospace' | 'sx' | 'width' | 'maxWidth' | 'minWidth' | 'variant' | 'size' | 'validationStatus'>;
export declare type TextInputProps = Merge<React.ComponentPropsWithoutRef<'input'>, TextInputNonPassthroughProps>;
declare const _default: PolymorphicForwardRefComponent<"input", TextInputProps> & {
    Action: React.ForwardRefExoticComponent<Pick<Omit<React.HTMLProps<HTMLButtonElement>, "aria-label" | "size"> & {
        children?: React.ReactNode;
        "aria-label"?: string | undefined;
        icon?: React.FunctionComponent<React.PropsWithChildren<import("@primer/octicons-react/dist/icons").IconProps>> | undefined;
        variant?: import("./Button/types").VariantType | undefined;
    } & import("./sx").SxProp, "open" | "default" | "muted" | "sizes" | "color" | "property" | "content" | "height" | "translate" | "width" | "hidden" | "children" | "value" | "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "type" | "id" | "dangerouslySetInnerHTML" | "list" | "name" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "start" | "as" | "step" | "wrap" | "icon" | "sx" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "max" | "media" | "method" | "min" | "target" | "crossOrigin" | "href" | "classID" | "useMap" | "wmode" | "hrefLang" | "integrity" | "rel" | "charSet" | "download" | "alt" | "coords" | "shape" | "autoPlay" | "controls" | "loop" | "mediaGroup" | "playsInline" | "preload" | "src" | "dateTime" | "acceptCharset" | "action" | "autoComplete" | "encType" | "noValidate" | "manifest" | "allowFullScreen" | "allowTransparency" | "frameBorder" | "marginHeight" | "marginWidth" | "sandbox" | "scrolling" | "seamless" | "srcDoc" | "srcSet" | "async" | "accept" | "capture" | "checked" | "maxLength" | "minLength" | "multiple" | "readOnly" | "required" | "challenge" | "keyType" | "keyParams" | "htmlFor" | "httpEquiv" | "high" | "low" | "optimum" | "reversed" | "selected" | "defer" | "nonce" | "scoped" | "cellPadding" | "cellSpacing" | "colSpan" | "headers" | "rowSpan" | "scope" | "cols" | "rows" | "kind" | "srcLang" | "poster" | "variant"> & React.RefAttributes<HTMLButtonElement>>;
};
export default _default;
