/**
 * https://discord.com/developers/docs/resources/channel#json-params
 */
export interface StartThreadwithoutMessageJsonParams {
    /**
     * 2-100 character channel name.
     */
    name: string;
    /**
     * Duration in minutes to automatically archive the thread after recent activity, 
     * can be set to: 60, 1440, 4320, 10080.
     */
    auto_archive_duration: number;
}
