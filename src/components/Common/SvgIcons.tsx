export default function SvgIcons({ type }: { type: string }) {
    switch (type) {
        case "close":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M12 48L27.8145 27.8145L48 12L32.1855 32.1855L12 48Z" fill="#DADADA"/>
                    <path d="M12 12L32.1855 27.8145L48 48L27.8145 32.1855L12 12Z" fill="#DADADA"/>
                    <path d="M48 12L30 30H33.9063L48 12Z" fill="white"/>
                    <path d="M12 12L30 30V26.1109L12 12Z" fill="white"/>
                    <path d="M12 48L30 30H26.1109L12 48Z" fill="white"/>
                    <path d="M48 48L30 30V33.9063L48 48Z" fill="white"/>
                </svg>
            );
        case "next":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M40 30L19 8L32 30L19 52L40 30Z" fill="#DADADA"/>
                    <path d="M40 30L19 8L36 30L19 52L40 30Z" fill="white"/>
                </svg>
            );
        default:
            return null;
    }
}
