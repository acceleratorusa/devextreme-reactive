import { AllDayPanel as AllDayPanel_2 } from '@devexpress/dx-react-scheduler';
import { AppointmentForm as AppointmentForm_2 } from '@devexpress/dx-react-scheduler';
import { AppointmentMeta } from '@devexpress/dx-react-scheduler';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import { Appointments as Appointments_2 } from '@devexpress/dx-react-scheduler';
import { AppointmentTooltip as AppointmentTooltip_2 } from '@devexpress/dx-react-scheduler';
import { ConfirmationDialog as ConfirmationDialog_2 } from '@devexpress/dx-react-scheduler';
import { CurrentTimeIndicator as CurrentTimeIndicator_2 } from '@devexpress/dx-react-scheduler';
import { DateNavigator as DateNavigator_2 } from '@devexpress/dx-react-scheduler';
import { DayView as DayView_2 } from '@devexpress/dx-react-scheduler';
import { DragDropProvider as DragDropProvider_2 } from '@devexpress/dx-react-scheduler';
import { EditRecurrenceMenu as EditRecurrenceMenu_2 } from '@devexpress/dx-react-scheduler';
import { GroupingPanel as GroupingPanel_2 } from '@devexpress/dx-react-scheduler';
import { MonthView as MonthView_2 } from '@devexpress/dx-react-scheduler';
import { Palette } from '@devexpress/dx-react-scheduler';
import * as React_2 from 'react';
import { Resource } from '@devexpress/dx-react-scheduler';
import { Scheduler as Scheduler_2 } from '@devexpress/dx-react-scheduler';
import { TodayButton as TodayButton_2 } from '@devexpress/dx-react-scheduler';
import { Toolbar as Toolbar_2 } from '@devexpress/dx-react-scheduler';
import { ViewSwitcher as ViewSwitcher_2 } from '@devexpress/dx-react-scheduler';
import { WeekView as WeekView_2 } from '@devexpress/dx-react-scheduler';

export declare namespace AllDayPanel {
    /** Describes a cell data configuration object. */
    export type CellData = AllDayPanel_2.CellData;
}

export declare namespace AllDayPanel {
    /** Describes properties passed to a component that renders an All Day panel layout. */
    export type LayoutProps = AllDayPanel_2.LayoutProps;
}

export declare namespace AllDayPanel {
    /** Describes properties passed to a component that renders an All Day panel cell. */
    export type CellProps = AllDayPanel_2.CellProps;
}

export declare namespace AllDayPanel {
    /** Describes properties passed to a component that renders an All Day panel row. */
    export type RowProps = AllDayPanel_2.RowProps;
}

export declare namespace AllDayPanel {
    /** Describes properties passed to a component that renders a title cell. */
    export type TitleCellProps = AllDayPanel_2.TitleCellProps;
}

export declare namespace AllDayPanel {
    /** Describes properties passed to a component that renders the appointment layer. */
    export type AppointmentLayerProps = AllDayPanel_2.AppointmentLayerProps;
}

export declare namespace AllDayPanel {
    /** Describes properties passed to a component that renders an All Day panel container. */
    export type ContainerProps = AllDayPanel_2.ContainerProps;
}

/** A plugin that renders the All Day Panel. */
export declare const AllDayPanel: React_2.ComponentType<AllDayPanelProps> & {
    /** A component that renders an All Day panel layout. */
    Layout: React_2.ComponentType<AllDayPanel_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders an All Day panel cell. */
    Cell: React_2.ComponentType<AllDayPanel_2.CellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders an All Day panel row. */
    Row: React_2.ComponentType<AllDayPanel_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a title cell. */
    TitleCell: React_2.ComponentType<AllDayPanel_2.TitleCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the appointment layer. */
    AppointmentLayer: React_2.ComponentType<AllDayPanel_2.AppointmentLayerProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders an All Day panel container. */
    Container: React_2.ComponentType<AllDayPanel_2.ContainerProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface AllDayPanelProps {
    /** A component that renders an All Day panel layout. */
    layoutComponent?: React_2.ComponentType<AllDayPanel_2.LayoutProps>;
    /** A component that renders an All Day panel cell. */
    cellComponent?: React_2.ComponentType<AllDayPanel_2.CellProps>;
    /** A component that renders an All Day panel row. */
    rowComponent?: React_2.ComponentType<AllDayPanel_2.RowProps>;
    /** A component that renders a title cell. */
    titleCellComponent?: React_2.ComponentType<AllDayPanel_2.TitleCellProps>;
    /** A component that renders the appointment layer. */
    appointmentLayerComponent?: React_2.ComponentType<AllDayPanel_2.AppointmentLayerProps>;
    /** A component that renders an All Day panel container. */
    containerComponent?: React_2.ComponentType<AllDayPanel_2.ContainerProps>;
    /** An object that specifies localization messages. */
    messages?: AllDayPanel_2.LocalizationMessages;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders the appointment form's overlay. */
    export type OverlayProps = AppointmentForm_2.OverlayProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders the appointment form's layout. */
    export type LayoutProps = AppointmentForm_2.LayoutProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a layout for command buttons. */
    export type CommandLayoutProps = AppointmentForm_2.CommandLayoutProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a layout for editors that edit basic appointment data. */
    export type BasicLayoutProps = AppointmentForm_2.BasicLayoutProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders the appointment form's layout for editors that edit the appointment's recurrence. */
    export type RecurrenceLayoutProps = AppointmentForm_2.RecurrenceLayoutProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a Boolean value editor on the appointment form. */
    export type BooleanEditorProps = AppointmentForm_2.BooleanEditorProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a command button on the appointment form. */
    export type CommandButtonProps = AppointmentForm_2.CommandButtonProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a date-time editor on the appointment form. */
    export type DateEditorProps = AppointmentForm_2.DateEditorProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a text label on the appointment form. */
    export type LabelProps = AppointmentForm_2.LabelProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a radio group on the appointment form. */
    export type RadioGroupProps = AppointmentForm_2.RadioGroupProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a menu of options on the appointment form. */
    export type SelectProps = AppointmentForm_2.SelectProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a resource editor on the appointment form. */
    export type ResourceEditorProps = AppointmentForm_2.ResourceEditorProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a text editor on the appointment form. */
    export type TextEditorProps = AppointmentForm_2.TextEditorProps;
}

export declare namespace AppointmentForm {
    /** Properties passed to a component that renders a weekly recurrence selector on the appointment form. */
    export type WeeklyRecurrenceSelectorProps = AppointmentForm_2.WeeklyRecurrenceSelectorProps;
}

/** The AppointmentForm plugin renders a form that visualizes appointment's data and allows a user to modify this data. */
export declare const AppointmentForm: React_2.ComponentType<AppointmentFormProps> & {
    /** A component that renders the appointment form's overlay. */
    Overlay: React_2.ComponentType<AppointmentForm_2.OverlayProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the appointment form's layout. */
    Layout: React_2.ComponentType<AppointmentForm_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a layout for command buttons. */
    CommandLayout: React_2.ComponentType<AppointmentForm_2.CommandLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a layout for editors that edit basic appointment data. */
    BasicLayout: React_2.ComponentType<AppointmentForm_2.BasicLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a layout for editors that specify the appointment's recurrence. */
    RecurrenceLayout: React_2.ComponentType<AppointmentForm_2.RecurrenceLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a text editor. */
    TextEditor: React_2.ComponentType<AppointmentForm_2.TextEditorProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a date-time editor. */
    DateEditor: React_2.ComponentType<AppointmentForm_2.DateEditorProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a text label. */
    Label: React_2.ComponentType<AppointmentForm_2.LabelProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a Boolean value editor. */
    BooleanEditor: React_2.ComponentType<AppointmentForm_2.BooleanEditorProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders an options menu. */
    Select: React_2.ComponentType<AppointmentForm_2.SelectProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a radio group. */
    RadioGroup: React_2.ComponentType<AppointmentForm_2.RadioGroupProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a weekly recurrence selector. */
    WeeklyRecurrenceSelector: React_2.ComponentType<AppointmentForm_2.WeeklyRecurrenceSelectorProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface AppointmentFormProps {
    /** Specifies the appointment form's visibility. */
    visible?: boolean;
    /** Handles changes to the appointment form's visibility. */
    onVisibilityChange?: (visible: boolean) => void;
    /** Specifies the appointment's data that the form displays. */
    appointmentData?: AppointmentModel;
    /** Handles changes to the appointment's data. */
    onAppointmentDataChange?: (appointmentData: AppointmentModel) => void;
    /** Specifies the appointment form is read-only. */
    readOnly?: boolean;
    /** An object that specifies localization messages. */
    messages?: AppointmentForm_2.LocalizationMessages;
    /** A component that renders the appointment form's overlay. */
    overlayComponent?: React_2.ComponentType<AppointmentForm_2.OverlayProps>;
    /** A component that renders the appointment form's layout. */
    layoutComponent?: React_2.ComponentType<AppointmentForm_2.LayoutProps>;
    /** A component that renders a layout for command buttons. */
    commandLayoutComponent?: React_2.ComponentType<AppointmentForm_2.CommandLayoutProps>;
    /** A component that renders a layout for editors that edit basic appoinement data. */
    basicLayoutComponent?: React_2.ComponentType<AppointmentForm_2.BasicLayoutProps>;
    /** A component that renders a layout for editors that specify the appointment's recurrence. */
    recurrenceLayoutComponent?: React_2.ComponentType<AppointmentForm_2.RecurrenceLayoutProps>;
    /** A component that renders a command button. */
    commandButtonComponent?: React_2.ComponentType<AppointmentForm_2.CommandButtonProps>;
    /** A component that renders a text editor. */
    textEditorComponent?: React_2.ComponentType<AppointmentForm_2.TextEditorProps>;
    /** A component that renders a date-time editor. */
    dateEditorComponent?: React_2.ComponentType<AppointmentForm_2.DateEditorProps>;
    /** A component that renders a text label. */
    labelComponent?: React_2.ComponentType<AppointmentForm_2.LabelProps>;
    /** A component that renders an editor of Boolean values. */
    booleanEditorComponent?: React_2.ComponentType<AppointmentForm_2.BooleanEditorProps>;
    /** A component that renders an options menu. */
    selectComponent?: React_2.ComponentType<AppointmentForm_2.SelectProps>;
    /** A component that renders a radio group. */
    radioGroupComponent?: React_2.ComponentType<AppointmentForm_2.RadioGroupProps>;
    /** A component that renders a resource editor. */
    resourceEditorComponent?: React_2.ComponentType<AppointmentForm_2.ResourceEditorProps>;
    /** A component that renders a weekly recurrence selector. */
    weeklyRecurrenceSelectorComponent?: React_2.ComponentType<AppointmentForm_2.WeeklyRecurrenceSelectorProps>;
}

export declare namespace Appointments {
    /** Properties passed to a component that renders an appointment. */
    export type AppointmentProps = Appointments_2.AppointmentProps;
}

export declare namespace Appointments {
    /** Properties passed to a component that renders the appointment content. */
    export type AppointmentContentProps = Appointments_2.AppointmentContentProps;
}

export declare namespace Appointments {
    /** Properties passed to a component that renders an element which indicates the appointment is divided. */
    export type SplitIndicatorProps = Appointments_2.SplitIndicatorProps;
}

export declare namespace Appointments {
    /** Properties passed to a component that renders a container for the appointment. */
    export type ContainerProps = Appointments_2.ContainerProps;
}

/** A plugin that renders appointments. */
export declare const Appointments: React_2.ComponentType<AppointmentsProps> & {
    /** A component that renders an appointment. */
    Appointment: React_2.ComponentType<Appointments_2.AppointmentProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the appointment content. */
    AppointmentContent: React_2.ComponentType<Appointments_2.AppointmentContentProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders an element which indicates the appointment is divided. */
    SplitIndicator: React_2.ComponentType<Appointments_2.SplitIndicatorProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a container for the appointment. */
    Container: React_2.ComponentType<Appointments_2.ContainerProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface AppointmentsProps {
    /** A component that renders an appointment. */
    appointmentComponent?: React_2.ComponentType<Appointments_2.AppointmentProps>;
    /** A component that renders the appointment content. */
    appointmentContentComponent?: React_2.ComponentType<Appointments_2.AppointmentContentProps>;
    /** A component that renders an element which indicates the appointment is divided. */
    splitIndicatorComponent?: React_2.ComponentType<Appointments_2.SplitIndicatorProps>;
    /** A component that renders an icon for recurring appointments. */
    recurringIconComponent?: React_2.ComponentType<object>;
    /** A component that renders a container for the appointment. */
    containerComponent?: React_2.ComponentType<Appointments_2.ContainerProps>;
}

export declare namespace AppointmentTooltip {
    /** Describes properties passed to a component that renders a tooltip layout. */
    export type LayoutProps = AppointmentTooltip_2.LayoutProps;
}

export declare namespace AppointmentTooltip {
    /** Describes properties passed to a component that renders the tooltip header. */
    export type HeaderProps = AppointmentTooltip_2.HeaderProps;
}

export declare namespace AppointmentTooltip {
    /** Describes properties passed to a component that renders the tooltip content. */
    export type ContentProps = AppointmentTooltip_2.ContentProps;
}

export declare namespace AppointmentTooltip {
    /** Describes properties passed to a component that renders a command button. */
    export type CommandButtonProps = AppointmentTooltip_2.CommandButtonProps;
}

/** The `AppointmentTooltip` plugin allows you to display information about an appointment in a tooltip. */
export declare const AppointmentTooltip: React_2.ComponentType<AppointmentTooltipProps> & {
    /** A component that renders the tooltip layout. */
    Layout: React_2.ComponentType<AppointmentTooltip_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the tooltip header. */
    Header: React_2.ComponentType<AppointmentTooltip_2.HeaderProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the tooltip content. */
    Content: React_2.ComponentType<AppointmentTooltip_2.ContentProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a command button. */
    CommandButton: React_2.ComponentType<AppointmentTooltip_2.CommandButtonProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface AppointmentTooltipProps {
    /** Specifies the Open button's visibility. */
    showOpenButton?: boolean;
    /** Specifies the Close button's visibility. */
    showCloseButton?: boolean;
    /** Specifies the Delete button's visibility. */
    showDeleteButton?: boolean;
    /** Specifies the tooltip's visibility. */
    visible?: boolean;
    /** The appointment's displayed metadata. */
    appointmentMeta?: AppointmentMeta;
    /** Handles the tooltip's visibility chages. */
    onVisibilityChange?: (visible: boolean) => void;
    /** Handles the meta data changes. */
    onAppointmentMetaChange?: (appointmentMeta: AppointmentMeta) => void;
    /** A component that renders the tooltip layout. */
    layoutComponent?: React_2.ComponentType<AppointmentTooltip_2.LayoutProps>;
    /** A component that renders the header. */
    headerComponent?: React_2.ComponentType<AppointmentTooltip_2.HeaderProps>;
    /** A component that renders the tooltip content. */
    contentComponent?: React_2.ComponentType<AppointmentTooltip_2.ContentProps>;
    /** A component that renders a command button. */
    commandButtonComponent?: React_2.ComponentType<AppointmentTooltip_2.CommandButtonProps>;
    /** A component that renders an icon that indicates a recurring appointment. */
    recurringIconComponent?: React_2.ComponentType<object>;
}

export declare namespace ConfirmationDialog {
    /** Properties passed to a component that renders the dialog's layout. */
    export type LayoutProps = ConfirmationDialog_2.LayoutProps;
}

export declare namespace ConfirmationDialog {
    /** Properties passed to a component that renders the overlay window. */
    export type OverlayProps = ConfirmationDialog_2.OverlayProps;
}

export declare namespace ConfirmationDialog {
    /** Properties passed to a component that renders the dialog's buttons. */
    export type ButtonProps = ConfirmationDialog_2.ButtonProps;
}

/** A plugin that renders a dialog that prompts a user to confirm that an appointment should be deleted or changes to an appointment should be discarded. */
export declare const ConfirmationDialog: React_2.ComponentType<ConfirmationDialogProps> & {
    /** A component that renders the dialog's layout. */
    Layout: React_2.ComponentType<ConfirmationDialog_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the overlay window. */
    Overlay: React_2.ComponentType<ConfirmationDialog_2.OverlayProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the dialog's buttons. */
    Button: React_2.ComponentType<ConfirmationDialog_2.ButtonProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface ConfirmationDialogProps {
    /** Specifies whether to open the dialog when a user attempts to delete an appointment. */
    ignoreDelete?: boolean;
    /** Specifies whether to open the dialog when a user attempts to discard edits made to an appointment. */
    ignoreCancel?: boolean;
    /** A component that renders the dialog's layout. */
    layoutComponent?: React_2.ComponentType<ConfirmationDialog_2.LayoutProps>;
    /** A component that renders the overlay window. */
    overlayComponent?: React_2.ComponentType<ConfirmationDialog_2.OverlayProps>;
    /** A component that renders the dialog's buttons. */
    buttonComponent?: React_2.ComponentType<ConfirmationDialog_2.ButtonProps>;
    /** An object that contains localized messages. */
    messages?: ConfirmationDialog_2.LocalizationMessages;
}

export declare namespace CurrentTimeIndicator {
    /** Properties passed to the `indicatorComponent`. */
    export type IndicatorProps = CurrentTimeIndicator_2.IndicatorProps;
}

/** A plugin that renders the current time indicator and the shading that covers appointments and timetable cells up to the current time. */
export declare const CurrentTimeIndicator: React_2.ComponentType<CurrentTimeIndicatorProps> & {
    /** A component that renders the current time indicator. */
    Indicator: React_2.ComponentType<CurrentTimeIndicator_2.IndicatorProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface CurrentTimeIndicatorProps {
    /** An interval in milliseconds that specifies how frequently the indicator's position is updated. */
    updateInterval?: number;
    /** Specifies whether previous appointments should be shaded. */
    shadePreviousAppointments?: boolean;
    /** Specifies whether previous cells should be shaded. */
    shadePreviousCells?: boolean;
    /** A component that renders the current time indicator. */
    indicatorComponent?: React_2.ComponentType<CurrentTimeIndicator_2.IndicatorProps>;
}

export declare namespace DateNavigator {
    /** Properties passed to a component that renders the date navigator's root element. */
    export type RootProps = DateNavigator_2.RootProps;
}

export declare namespace DateNavigator {
    /** Properties passed to a component that renders the date navigator's overlay element. */
    export type OverlayProps = DateNavigator_2.OverlayProps;
}

export declare namespace DateNavigator {
    /** Properties passed to a component that renders the date navigator's open button. */
    export type OpenButtonProps = DateNavigator_2.OpenButtonProps;
}

export declare namespace DateNavigator {
    /** Properties passed to a component that renders the date navigator's navigation button. */
    export type NavigationButtonProps = DateNavigator_2.NavigationButtonProps;
}

/** A plugin that renders the Scheduler's date navigator. */
export declare const DateNavigator: React_2.ComponentType<DateNavigatorProps> & {
    /** A component that renders the date navigator's root element. */
    Root: React_2.ComponentType<DateNavigator_2.RootProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the date navigator's overlay element. */
    Overlay: React_2.ComponentType<DateNavigator_2.OverlayProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a button that invokes the date navigator. */
    OpenButton: React_2.ComponentType<DateNavigator_2.OpenButtonProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the date navigator's navigation buttons. */
    NavigationButton: React_2.ComponentType<DateNavigator_2.NavigationButtonProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface DateNavigatorProps {
    /** A component that renders the date navigator's root element. */
    rootComponent?: React_2.ComponentType<DateNavigator_2.RootProps>;
    /** A component that renders the date navigator's overlay element. */
    overlayComponent?: React_2.ComponentType<DateNavigator_2.OverlayProps>;
    /** A component that renders a button that invokes the date navigator. */
    openButtonComponent?: React_2.ComponentType<DateNavigator_2.OpenButtonProps>;
    /** A component that renders the date navigator's navigation buttons. */
    navigationButtonComponent?: React_2.ComponentType<DateNavigator_2.NavigationButtonProps>;
}

export declare namespace DayView {
    /** Describes a cell data configuration object. */
    export type CellData = DayView_2.CellData;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a day view layout. */
    export type LayoutProps = DayView_2.LayoutProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a time scale layout. */
    export type TimeScaleLayoutProps = DayView_2.TimeScaleLayoutProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a time scale label. */
    export type TimeScaleLabelProps = DayView_2.TimeScaleLabelProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a time scale tick. */
    export type TimeScaleTickCellProps = DayView_2.TimeScaleTickCellProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a day scale layout. */
    export type DayScaleLayoutProps = DayView_2.DayScaleLayoutProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a day scale cell. */
    export type DayScaleCellProps = DayView_2.DayScaleCellProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a day scale empty cell. */
    export type DayScaleEmptyCellProps = DayView_2.DayScaleEmptyCellProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a timetable layout. */
    export type TimeTableLayoutProps = DayView_2.TimeTableLayoutProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a timetable cell. */
    export type TimeTableCellProps = DayView_2.TimeTableCellProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders the appointment layer. */
    export type AppointmentLayerProps = DayView_2.AppointmentLayerProps;
}

export declare namespace DayView {
    /** Describes properties passed to a component that renders a day view row. */
    export type RowProps = DayView_2.RowProps;
}

/** A plugin that renders Scheduler data for a day. This plugin arranges appointments from top to bottom. If their time intervals overlap, their width is decreased and they are placed next to each other. */
export declare const DayView: React_2.ComponentType<DayViewProps> & {
    /** A component that renders a day view layout. */
    Layout: React_2.ComponentType<DayView_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a time scale layout. */
    TimeScaleLayout: React_2.ComponentType<DayView_2.TimeScaleLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a time scale label. */
    TimeScaleLabel: React_2.ComponentType<DayView_2.TimeScaleLabelProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a time scale tick. */
    TimeScaleTickCell: React_2.ComponentType<DayView_2.TimeScaleTickCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale layout. */
    DayScaleLayout: React_2.ComponentType<DayView_2.DayScaleLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale cell. */
    DayScaleCell: React_2.ComponentType<DayView_2.DayScaleCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale row. */
    DayScaleRow: React_2.ComponentType<DayView_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale empty cell. */
    DayScaleEmptyCell: React_2.ComponentType<DayView_2.DayScaleEmptyCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable layout. */
    TimeTableLayout: React_2.ComponentType<DayView_2.TimeTableLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable cell. */
    TimeTableCell: React_2.ComponentType<DayView_2.TimeTableCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable row. */
    TimeTableRow: React_2.ComponentType<DayView_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the appointment layer. */
    AppointmentLayer: React_2.ComponentType<DayView_2.AppointmentLayerProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface DayViewProps {
    /** The view's unique identifier. Required if you use several `DayView` plugins. */
    name?: string;
    /** The view's name used in UI plugins. The default value is `name`. */
    displayName?: string;
    /** Multiplies the default view interval. */
    intervalCount?: number;
    /** Specifies the cell's duration in minutes. */
    cellDuration?: number;
    /** Specifies the start hour of the view time scale. Accepts floating-point numbers from 0 to 24. */
    startDayHour?: number;
    /** Specifies the end hour of the view time scale. Accepts floating-point numbers from 0 to 24. */
    endDayHour?: number;
    /** A component that renders a day view layout. */
    layoutComponent?: React_2.ComponentType<DayView_2.LayoutProps>;
    /** A component that renders a time scale layout. */
    timeScaleLayoutComponent?: React_2.ComponentType<DayView_2.TimeScaleLayoutProps>;
    /** A component that renders a time scale label. */
    timeScaleLabelComponent?: React_2.ComponentType<DayView_2.TimeScaleLabelProps>;
    /** A component that renders a time scale tick. */
    timeScaleTickCellComponent?: React_2.ComponentType<DayView_2.TimeScaleTickCellProps>;
    /** A component that renders a day scale layout. */
    dayScaleLayoutComponent?: React_2.ComponentType<DayView_2.DayScaleLayoutProps>;
    /** A component that renders a day scale cell. */
    dayScaleCellComponent?: React_2.ComponentType<DayView_2.DayScaleCellProps>;
    /** A component that renders a day scale row. */
    dayScaleRowComponent?: React_2.ComponentType<DayView_2.RowProps>;
    /** A component that renders a day scale empty cell. */
    dayScaleEmptyCellComponent?: React_2.ComponentType<DayView_2.DayScaleEmptyCellProps>;
    /** A component that renders a timetable layout. */
    timeTableLayoutComponent?: React_2.ComponentType<DayView_2.TimeTableLayoutProps>;
    /** A component that renders a timetable cell. */
    timeTableCellComponent?: React_2.ComponentType<DayView_2.TimeTableCellProps>;
    /** A component that renders a timetable row. */
    timeTableRowComponent?: React_2.ComponentType<DayView_2.RowProps>;
    /** A component that renders the appointment layer. */
    appointmentLayerComponent?: React_2.ComponentType<DayView_2.AppointmentLayerProps>;
}

export declare namespace DragDropProvider {
    /** Describes properties of the component that renders the appointment being dragged. */
    export type DraftAppointmentProps = DragDropProvider_2.DraftAppointmentProps;
}

export declare namespace DragDropProvider {
    /** Describes properties of the component that renders a copy of the appointment being dragged in its previous location. */
    export type SourceAppointmentProps = DragDropProvider_2.SourceAppointmentProps;
}

export declare namespace DragDropProvider {
    /** Describes properties of the component that renders a handle used to resize the appointment. */
    export type ResizeProps = DragDropProvider_2.ResizeProps;
}

export declare namespace DragDropProvider {
    /** Describes properties of the component that renders a container for the appointment being dragged. */
    export type ContainerProps = DragDropProvider_2.ContainerProps;
}

/** A plugin that enables users to edit appointments via drag-and-drop. */
export declare const DragDropProvider: React_2.ComponentType<DragDropProviderProps> & {
    /** A component that renders the appointment being dragged. */
    DraftAppointment: React_2.ComponentType<DragDropProvider_2.DraftAppointmentProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a copy of the appointment being dragged in its previous location. */
    SourceAppointment: React_2.ComponentType<DragDropProvider_2.SourceAppointmentProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the handle of the appointment being resized. */
    Resize: React_2.ComponentType<DragDropProvider_2.ResizeProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a container for the appointment being dragged. */
    Container: React_2.ComponentType<DragDropProvider_2.ContainerProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface DragDropProviderProps {
    /** A function that specifies draggable appointments. */
    allowDrag?: (appointmentData: AppointmentModel) => boolean;
    /** A function that specifies resizable appointments. */
    allowResize?: (appointmentData: AppointmentModel) => boolean;
    /** Specifies the scroll speed when an appointment is resized or dragged and dropped. */
    scrollSpeed?: number;
    /** A component that renders the appointment being dragged. */
    draftAppointmentComponent?: React_2.ComponentType<DragDropProvider_2.DraftAppointmentProps>;
    /** A component that renders a copy of the appointment being dragged in its previous location. */
    sourceAppointmentComponent?: React_2.ComponentType<DragDropProvider_2.SourceAppointmentProps>;
    /** A component that renders a handle used to resize the appointment. */
    resizeComponent?: React_2.ComponentType<DragDropProvider_2.ResizeProps>;
    /** A component that renders a container for the appointment being dragged. */
    containerComponent?: React_2.ComponentType<DragDropProvider_2.ContainerProps>;
}

export declare namespace EditRecurrenceMenu {
    /** Properties passed to a component that renders the edit menu's layout. */
    export type LayoutProps = EditRecurrenceMenu_2.LayoutProps;
}

export declare namespace EditRecurrenceMenu {
    /** Properties passed to a component that renders the overlay window. */
    export type OverlayProps = EditRecurrenceMenu_2.OverlayProps;
}

export declare namespace EditRecurrenceMenu {
    /** Properties passed to a component that renders the OK and Cancel buttons. */
    export type ButtonProps = EditRecurrenceMenu_2.ButtonProps;
}

/** A plugin that renders the menu that allows users to edit recurrent appointments. Should not be used with the IntegratedEditing plugin. */
export declare const EditRecurrenceMenu: React_2.ComponentType<EditRecurrenceMenuProps> & {
    /** A component that renders the edit menu's layout. */
    Layout: React_2.ComponentType<EditRecurrenceMenu_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the overlay window. */
    Overlay: React_2.ComponentType<EditRecurrenceMenu_2.OverlayProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the OK and Cancel buttons. */
    Button: React_2.ComponentType<EditRecurrenceMenu_2.ButtonProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface EditRecurrenceMenuProps {
    /** A component that renders the menu's layout. */
    layoutComponent?: React_2.ComponentType<EditRecurrenceMenu_2.LayoutProps>;
    /** A component that renders the overlay window. */
    overlayComponent?: React_2.ComponentType<EditRecurrenceMenu_2.OverlayProps>;
    /** A component that renders the OK and Cancel buttons. */
    buttonComponent?: React_2.ComponentType<EditRecurrenceMenu_2.ButtonProps>;
    /** An object that contains localized messages. */
    messages?: EditRecurrenceMenu_2.LocalizationMessages;
}

export declare namespace GroupingPanel {
    /** Describes properties passed to a component that renders the grouping panel horizontally. */
    export type HorizontalLayoutProps = GroupingPanel_2.HorizontalLayoutProps;
}

export declare namespace GroupingPanel {
    /** Describes properties passed to a component that renders the grouping panel vertically. */
    export type VerticalLayoutProps = GroupingPanel_2.VerticalLayoutProps;
}

export declare namespace GroupingPanel {
    /** Describes properties passed to a component that renders a row on the grouping panel. */
    export type RowProps = GroupingPanel_2.RowProps;
}

export declare namespace GroupingPanel {
    /** Describes properties passed to a component that renders a cell in a row on the grouping panel. */
    export type CellProps = GroupingPanel_2.CellProps;
}

/** A plugin that renders the grouping panel used to display group names. */
export declare const GroupingPanel: React_2.ComponentType<GroupingPanelProps> & {
    /** A component that renders the grouping panel horizontally. */
    HorizontalLayout: React_2.ComponentType<GroupingPanel_2.HorizontalLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the grouping panel vertically. */
    VerticalLayout: React_2.ComponentType<GroupingPanel_2.VerticalLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a row on the grouping panel. */
    Row: React_2.ComponentType<GroupingPanel_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a cell in a row on the grouping panel. */
    Cell: React_2.ComponentType<GroupingPanel_2.CellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface GroupingPanelProps {
    /** A component that renders the grouping panel horizontally. */
    horizontalLayoutComponent?: React_2.ComponentType<GroupingPanel_2.HorizontalLayoutProps>;
    /** A component that renders the grouping panel vertically. */
    verticalLayoutComponent?: React_2.ComponentType<GroupingPanel_2.HorizontalLayoutProps>;
    /** A component that renders a row on the grouping panel. */
    rowComponent?: React_2.ComponentType<GroupingPanel_2.RowProps>;
    /** A component that renders a cell in a row on the grouping panel. */
    cellComponent?: React_2.ComponentType<GroupingPanel_2.CellProps>;
}

export declare namespace MonthView {
    /** Describes a cell data configuration object. */
    export type CellData = MonthView_2.CellData;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders a month view layout. */
    export type LayoutProps = MonthView_2.LayoutProps;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders a day scale layout. */
    export type DayScaleLayoutProps = MonthView_2.DayScaleLayoutProps;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders a day scale cell. */
    export type DayScaleCellProps = MonthView_2.DayScaleCellProps;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders an empty cell on the day scale. */
    export type DayScaleEmptyCellProps = MonthView_2.DayScaleEmptyCellProps;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders a timetable layout. */
    export type TimeTableLayoutProps = MonthView_2.TimeTableLayoutProps;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders a timetable cell. */
    export type TimeTableCellProps = MonthView_2.TimeTableCellProps;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders the appointment layer. */
    export type AppointmentLayerProps = MonthView_2.AppointmentLayerProps;
}

export declare namespace MonthView {
    /** Describes properties passed to a component that renders a row. */
    export type RowProps = MonthView_2.RowProps;
}

/** A plugin that renders Scheduler data for a month. This plugin arranges appointments from left to right. An appointment's size depends on its duration in days. However, it occupies the entire day cell if an appointment lasts only for several hours or minutes. The time scale and all-day panel are not available in this view. */
export declare const MonthView: React_2.ComponentType<MonthViewProps> & {
    /** A component that renders a month view layout. */
    Layout: React_2.ComponentType<MonthView_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale layout. */
    DayScaleLayout: React_2.ComponentType<MonthView_2.DayScaleLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale cell. */
    DayScaleCell: React_2.ComponentType<MonthView_2.DayScaleCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale row. */
    DayScaleRow: React_2.ComponentType<MonthView_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders an empty cell on the day scale. */
    DayScaleEmptyCell: React_2.ComponentType<MonthView_2.DayScaleEmptyCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable layout. */
    TimeTableLayout: React_2.ComponentType<MonthView_2.TimeTableLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable cell. */
    TimeTableCell: React_2.ComponentType<MonthView_2.TimeTableCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable row. */
    TimeTableRow: React_2.ComponentType<MonthView_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the appointment layer. */
    AppointmentLayer: React_2.ComponentType<MonthView_2.AppointmentLayerProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface MonthViewProps {
    /** The view's unique identifier. Required if you use several `MonthView` plugins. */
    name?: string;
    /** The view's name used in UI plugins. The default value is equal to `name`. */
    displayName?: string;
    /** Multiplies the default view interval. */
    intervalCount?: number;
    /** A component that renders a month view layout. */
    layoutComponent?: React_2.ComponentType<MonthView_2.LayoutProps>;
    /** A component that renders a day scale layout. */
    dayScaleLayoutComponent?: React_2.ComponentType<MonthView_2.DayScaleLayoutProps>;
    /** A component that renders a day scale cell. */
    dayScaleCellComponent?: React_2.ComponentType<MonthView_2.DayScaleCellProps>;
    /** A component that renders a day scale row. */
    dayScaleRowComponent?: React_2.ComponentType<MonthView_2.RowProps>;
    /** A component that renders an empty cell on the day scale. */
    dayScaleEmptyCellComponent?: React_2.ComponentType<MonthView_2.DayScaleEmptyCellProps>;
    /** A component that renders a timetable layout. */
    timeTableLayoutComponent?: React_2.ComponentType<MonthView_2.TimeTableLayoutProps>;
    /** A component that renders a timetable cell. */
    timeTableCellComponent?: React_2.ComponentType<MonthView_2.TimeTableCellProps>;
    /** A component that renders a timetable row. */
    timeTableRowComponent?: React_2.ComponentType<MonthView_2.RowProps>;
    /** A component that renders the appointment layer. */
    appointmentLayerComponent?: React_2.ComponentType<MonthView_2.AppointmentLayerProps>;
}

/** A plugin that configures resources. */
export declare const Resources: React_2.ComponentType<ResourcesProps>;

export declare interface ResourcesProps {
    /** Resource data objects. */
    data?: Array<Resource>;
    /** Specifies which of several resources provides colors for appointments. */
    mainResourceName?: string;
    /** A palette used if a resource instance color is not defined. */
    palette?: Palette;
}

export declare namespace Scheduler {
    /** Describes properties passed to a component that renders the root layout. */
    export type RootProps = Scheduler_2.RootProps;
}

/** The Scheduler is a root container component designed to process and display the specified data. The Scheduler's functionality  is implemented in several plugins specified as child components. */
export declare const Scheduler: React_2.ComponentType<SchedulerProps> & {
    /** A component that renders the root layout. */
    Root: React_2.ComponentType<Scheduler_2.RootProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface SchedulerProps {
    /** An array of appointment data objects. */
    data?: Array<AppointmentModel>;
    /** The scheduler's height. If the value is `auto`, the height equals that of the container component. */
    height?: number | `auto`;
    /** The locale according to which dates should be formatted. */
    locale?: string | Array<string>;
    /** A number between 0  and 6  that specifies the first day of the week. */
    firstDayOfWeek?: number;
    /** A component that renders the root layout. */
    rootComponent?: React_2.ComponentType<Scheduler_2.RootProps>;
    /** A React node used to render the scheduler content. */
    children?: React_2.ReactNode;
}

export declare namespace TodayButton {
    /** Properties passed to the component that renders the today button. */
    export type ButtonProps = TodayButton_2.ButtonProps;
}

/** A plugin that renders the Scheduler's button that is used to navigate to the today's date */
export declare const TodayButton: React_2.ComponentType<TodayButtonProps> & {
    /** A component that renders the today button. */
    Button: React_2.ComponentType<TodayButton_2.ButtonProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface TodayButtonProps {
    /** A component that renders the today button. */
    buttonComponent?: React_2.ComponentType<TodayButton_2.ButtonProps>;
    /** An object that specifies localization messages. */
    messages?: TodayButton_2.LocalizationMessages;
}

export declare namespace Toolbar {
    /** Describes properties passed to a component that renders the toolbar's root element. */
    export type RootProps = Toolbar_2.RootProps;
}

export declare namespace Toolbar {
    /** Describes properties passed to a component that renders the the toolbar's empty area. */
    export type FlexibleSpaceProps = Toolbar_2.FlexibleSpaceProps;
}

/** A plugin that renders the Scheduler's toolbar. */
export declare const Toolbar: React_2.ComponentType<ToolbarProps> & {
    /** A component that renders the toolbar's root element. */
    Root: React_2.ComponentType<Toolbar_2.RootProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the toolbar's empty area. */
    FlexibleSpace: React_2.ComponentType<Toolbar_2.FlexibleSpaceProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface ToolbarProps {
    /** A component that renders the toolbar's root element. */
    rootComponent?: React_2.ComponentType<Toolbar_2.RootProps>;
    /** A component that renders the toolbar's empty area. */
    flexibleSpaceComponent?: React_2.ComponentType<Toolbar_2.FlexibleSpaceProps>;
}

export declare namespace ViewSwitcher {
    /** Properties passed to a component that renders the view switcher. */
    export type SwitcherProps = ViewSwitcher_2.SwitcherProps;
}

/** A plugin that renders the Scheduler's view switcher. */
export declare const ViewSwitcher: React_2.ComponentType<ViewSwitcherProps> & {
    /** A component that renders the view switcher. */
    Switcher: React_2.ComponentType<ViewSwitcher_2.SwitcherProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface ViewSwitcherProps {
    /** A component that renders the view switcher. */
    switcherComponent?: React_2.ComponentType<ViewSwitcher_2.SwitcherProps>;
}

export declare namespace WeekView {
    /** Describes a cell data configuration object. */
    export type CellData = WeekView_2.CellData;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a week view layout. */
    export type LayoutProps = WeekView_2.LayoutProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a time scale layout. */
    export type TimeScaleLayoutProps = WeekView_2.TimeScaleLayoutProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a time scale label. */
    export type TimeScaleLabelProps = WeekView_2.TimeScaleLabelProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a time scale tick. */
    export type TimeScaleTickCellProps = WeekView_2.TimeScaleTickCellProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a day scale layout. */
    export type DayScaleLayoutProps = WeekView_2.DayScaleLayoutProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a day scale cell. */
    export type DayScaleCellProps = WeekView_2.DayScaleCellProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a day scale empty cell. */
    export type DayScaleEmptyCellProps = WeekView_2.DayScaleEmptyCellProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a timetable layout. */
    export type TimeTableLayoutProps = WeekView_2.TimeTableLayoutProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a timetable cell. */
    export type TimeTableCellProps = WeekView_2.TimeTableCellProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders the appointment layer. */
    export type AppointmentLayerProps = WeekView_2.AppointmentLayerProps;
}

export declare namespace WeekView {
    /** Describes properties passed to a component that renders a week view row. */
    export type RowProps = WeekView_2.RowProps;
}

/** A plugin that renders the Scheduler's week view. This plugin arranges appointments from top to bottom. If their time intervals overlap, their width is decreased and they are placed next to each other. */
export declare const WeekView: React_2.ComponentType<WeekViewProps> & {
    /** A component that renders a week view layout. */
    Layout: React_2.ComponentType<WeekView_2.LayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a time scale layout. */
    TimeScaleLayout: React_2.ComponentType<WeekView_2.TimeScaleLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a time scale label. */
    TimeScaleLabel: React_2.ComponentType<WeekView_2.TimeScaleLabelProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a time scale tick. */
    TimeScaleTickCell: React_2.ComponentType<WeekView_2.TimeScaleTickCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale layout. */
    DayScaleLayout: React_2.ComponentType<WeekView_2.DayScaleLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale cell. */
    DayScaleCell: React_2.ComponentType<WeekView_2.DayScaleCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale row. */
    DayScaleRow: React_2.ComponentType<WeekView_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a day scale empty cell. */
    DayScaleEmptyCell: React_2.ComponentType<WeekView_2.DayScaleEmptyCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable layout. */
    TimeTableLayout: React_2.ComponentType<WeekView_2.TimeTableLayoutProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable cell. */
    TimeTableCell: React_2.ComponentType<WeekView_2.TimeTableCellProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders a timetable row. */
    TimeTableRow: React_2.ComponentType<WeekView_2.RowProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
    /** A component that renders the appointment layer. */
    AppointmentLayer: React_2.ComponentType<WeekView_2.AppointmentLayerProps & { className?: string; style?: React_2.CSSProperties; [x: string]: any }>;
};

export declare interface WeekViewProps {
    /** The view's unique identifier. Required if you use several `WeekView` plugins. */
    name?: string;
    /** The view's name used in UI plugins. The default value is equal to `name`. */
    displayName?: string;
    /** Specifies the days of week that should not be displayed in the view. Accepts an array of zero-based day indexes . */
    excludedDays?: Array<number>;
    /** Multiplies the default view interval. */
    intervalCount?: number;
    /** Specifies the cell's duration in minutes. */
    cellDuration?: number;
    /** Specifies the start hour of the view time scale. Accepts floating-point numbers from 0 to 24. */
    startDayHour?: number;
    /** Specifies the end hour of the view time scale. Accepts floating-point numbers from 0 to 24. */
    endDayHour?: number;
    /** A component that renders a week view layout. */
    layoutComponent?: React_2.ComponentType<WeekView_2.LayoutProps>;
    /** A component that renders a time scale layout. */
    timeScaleLayoutComponent?: React_2.ComponentType<WeekView_2.TimeScaleLayoutProps>;
    /** A component that renders a time scale label. */
    timeScaleLabelComponent?: React_2.ComponentType<WeekView_2.TimeScaleLabelProps>;
    /** A component that renders a time scale tick. */
    timeScaleTickCellComponent?: React_2.ComponentType<WeekView_2.TimeScaleTickCellProps>;
    /** A component that renders a day scale layout. */
    dayScaleLayoutComponent?: React_2.ComponentType<WeekView_2.DayScaleLayoutProps>;
    /** A component that renders a day scale cell. */
    dayScaleCellComponent?: React_2.ComponentType<WeekView_2.DayScaleCellProps>;
    /** A component that renders a day scale row. */
    dayScaleRowComponent?: React_2.ComponentType<WeekView_2.RowProps>;
    /** A component that renders a day scale empty cell. */
    dayScaleEmptyCellComponent?: React_2.ComponentType<WeekView_2.DayScaleEmptyCellProps>;
    /** A component that renders a timetable layout. */
    timeTableLayoutComponent?: React_2.ComponentType<WeekView_2.TimeTableLayoutProps>;
    /** A component that renders a timetable cell. */
    timeTableCellComponent?: React_2.ComponentType<WeekView_2.TimeTableCellProps>;
    /** A component that renders a timetable row. */
    timeTableRowComponent?: React_2.ComponentType<WeekView_2.RowProps>;
    /** A component that renders an appointment layer. */
    appointmentLayerComponent?: React_2.ComponentType<WeekView_2.AppointmentLayerProps>;
}

export { }
