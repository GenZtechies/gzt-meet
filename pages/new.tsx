import React from "react";
import { customAlphabet } from "nanoid";
import { useRouter } from "next/router";
import { Button, Loader } from "../components";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz", 3);

let createTimeout: any = undefined;

const New = () => {
    const router = useRouter();
    const [copied, setCopied] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [meetingID, setMeetingID] = React.useState<string>("");
    const [meetingLink, setMeetingLink] = React.useState<string>("");

    const handleCreateMeetingRoom = React.useCallback(() => {
        const ID = `${nanoid()}-${nanoid()}-${nanoid()}`.toUpperCase();
        setMeetingID(ID);
        setMeetingLink(window.location.origin + "/" + ID);
        setLoading(false);
    }, []);

    const handleShareURL = React.useCallback(async () => {
        await navigator.clipboard.writeText(meetingLink).then(() => setCopied(true));
    }, [meetingLink]);

    const handleEnterMeeting = React.useCallback(() => {
        router.replace(meetingID);
    }, [meetingID]);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            createTimeout = setTimeout(() => handleCreateMeetingRoom(), 4000);
        }

        return () => clearTimeout(createTimeout);
    }, []);

    return (
        <main className="h-screen w-screen flex flex-col items-center justify-center bg-[url('/assets/images/bg.svg')]">
            <div className="container flex items-center flex-col justify-center space-y-4 text-center">
                {loading ? (
                    <>
                        <h1>Please wait while we create a new meeting room.</h1>
                        <Loader />
                    </>
                ) : (
                    <>
                        <h1>Please copy the link below and share it with your friends</h1>
                        <h1 className="font-semibold text-xl">{meetingLink}</h1>
                        <h1 className="font-normal">or share the code</h1>
                        <h1 className="font-semibold text-xl">{meetingID}</h1>
                        <Button className={`${copied ? "!bg-tertiary hover:bg-tertiary" : "bg-primary"}`} onClick={handleShareURL}>
                            {copied ? "Link Copied" : "Copy Link"}
                        </Button>
                        <Button onClick={handleEnterMeeting}>Continue to meeting</Button>
                    </>
                )}
            </div>
        </main>
    );
};

export default New;
