import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-lexend: Lexend;

/* font sizes */
--font-size-sm: 14px;
--font-size-lg: 18px;
--font-size-base: 16px;
--font-size-13xl: 32px;
--font-size-5xl: 24px;
--font-size-xl: 20px;
--font-size-xs: 12px;

/* Colors */
--color-white: #fff;
--neutral-500: #888b97;
--neutral-900: #0e1735;
--color-gray-100: rgba(255, 255, 255, 0.3);
--color-gray-200: rgba(255, 255, 255, 0.1);
--mrt-app-headline: #1b1c57;
--color-turquoise: #4be4c9;
--yellow-500: #f59e0b;
--mrt-app-neutral-01: #626687;
--green-500: #10b981;
--neutral-700: #3c4563;
--neutral-100: #f0f3fd;
--neutral-300: #e0e3eb;
--red-100: #fee2e2;
--red-500: #ef4444;
--green-100: #d1fae5;
--green-700: #047857;
--blue-100: #dbeafe;
--blue-700: #1d4ed8;
--yellow-300: #fcd34d;
--mrt-app-subheadline: #68799f;

/* Gaps */
--gap-5xl: 24px;
--gap-xs: 12px;
--gap-base: 16px;
--gap-5xs: 8px;
--gap-21xl: 40px;
--gap-13xl: 32px;
--gap-37xl: 56px;
--gap-9xs: 4px;
--gap-131xl: 150px;
--gap-40xl: 59px;
--gap-34xl: 53px;
--gap-3xs: 10px;
--gap-11xs: 2px;

/* Paddings */
--padding-9xs: 4px;
--padding-5xl: 24px;
--padding-xs: 12px;
--padding-base: 16px;
--padding-13xl: 32px;
--padding-5xs: 8px;

/* border radiuses */
--br-9xs: 4px;
--br-5xl: 24px;
--br-13xl: 32px;
--br-base: 16px;
--br-5xs: 8px;
--br-11xs: 2px;

/* Effects */
--shadow-smooth: 0px 9px 32px rgba(89, 92, 219, 0.05);
--shadow-ig-post: 0px 11px 48px rgba(51, 51, 51, 0.06);
}
`;
