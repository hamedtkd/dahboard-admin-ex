import { IconProps } from "@/@types/IconProps";

export function EyeIcon({ ...props }: IconProps) {
    return (
        <svg
            {...props}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.29464 14.9554C4.58029 15.4281 4.42868 16.0429 3.95601 16.3285C3.48333 16.6142 2.86859 16.4626 2.58294 15.9899C2.17684 15.3179 1.90131 14.7388 1.7393 14.365C1.50731 13.8298 1.54097 13.2271 1.82359 12.7225C2.25486 11.9523 3.34432 10.172 5.02335 8.57233C6.69852 6.97635 9.05564 5.47266 11.9997 5.47266C14.9438 5.47266 17.301 6.97635 18.9761 8.57233C20.6552 10.172 21.7446 11.9523 22.1759 12.7225C22.4585 13.2271 22.4922 13.8298 22.2602 14.365C22.0982 14.7388 21.8226 15.3179 21.4165 15.9899C21.1309 16.4626 20.5161 16.6142 20.0435 16.3285C19.5708 16.0429 19.4192 15.4281 19.7048 14.9554C20.0315 14.415 20.2581 13.9475 20.3956 13.6371C19.9898 12.922 19.0289 11.385 17.5966 10.0204C16.1171 8.61082 14.2297 7.47266 11.9997 7.47266C9.76978 7.47266 7.8824 8.61082 6.40292 10.0204C4.9706 11.385 4.00964 12.922 3.60389 13.6371C3.74137 13.9475 3.96802 14.415 4.29464 14.9554Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9997 8.97266C9.23831 8.97266 6.99974 11.2112 6.99974 13.9727C6.99974 16.7341 9.23831 18.9727 11.9997 18.9727C14.7612 18.9727 16.9997 16.7341 16.9997 13.9727C16.9997 11.2112 14.7612 8.97266 11.9997 8.97266ZM8.99974 13.9727C8.99974 12.3158 10.3429 10.9727 11.9997 10.9727C13.6566 10.9727 14.9997 12.3158 14.9997 13.9727C14.9997 15.6295 13.6566 16.9727 11.9997 16.9727C10.3429 16.9727 8.99974 15.6295 8.99974 13.9727Z"
                fill="currentColor"
            />
        </svg>
    );
}
