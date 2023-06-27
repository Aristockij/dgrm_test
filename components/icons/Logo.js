import React from 'react';

const Logo = ({className}) => {
    return (
            <svg className={className} width="125" height="27" viewBox="0 0 125 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0618 0.148956C10.1492 0.0496483 10.2604 -5.72205e-06 10.3915 -5.72205e-06C10.5246 -5.72205e-06 10.6339 0.0496483 10.7212 0.148956C10.8086 0.248264 10.8543 0.351536 10.8543 0.462761V19.7622C10.8543 20.0701 10.6994 20.223 10.3915 20.223C10.0837 20.223 9.93076 20.0701 9.93076 19.7622V17.651C9.46799 18.5308 8.82445 19.2279 8.0002 19.7443C7.17595 20.2607 6.27822 20.5209 5.31097 20.5209C3.79355 20.5209 2.52835 19.9489 1.5174 18.8049C0.504461 17.6609 0 16.3202 0 14.779C0 13.2397 0.504461 11.899 1.5174 10.755C2.52835 9.61098 3.79355 9.03899 5.31097 9.03899C6.27822 9.03899 7.17595 9.30314 8.0002 9.83146C8.82445 10.3598 9.46799 11.0629 9.93076 11.9427V0.462761C9.93076 0.351536 9.97444 0.248264 10.0618 0.148956ZM2.17681 18.1455C3.01298 19.1128 4.05771 19.5974 5.31097 19.5974C6.56622 19.5974 7.60893 19.1128 8.4451 18.1455C9.28127 17.1763 9.69837 16.0561 9.69837 14.779C9.69837 13.5038 9.28127 12.3837 8.4451 11.4144C7.60893 10.4472 6.56622 9.96253 5.31097 9.96253C4.05771 9.96253 3.01298 10.4472 2.17681 11.4144C1.34064 12.3837 0.923541 13.5038 0.923541 14.779C0.923541 16.0561 1.34064 17.1763 2.17681 18.1455Z" fill="white"/>
                <path d="M43.492 9.35278C43.5794 9.25545 43.6906 9.20381 43.8217 9.20381C43.9548 9.20381 44.064 9.25545 44.1514 9.35278C44.2388 9.45208 44.2845 9.55734 44.2845 9.66658V19.7284C44.2845 20.0363 44.1296 20.1912 43.8217 20.1912C43.5139 20.1912 43.3589 20.0363 43.3589 19.7284V17.6171C42.8763 18.4752 42.2268 19.1683 41.4125 19.6946C40.6002 20.223 39.7084 20.4871 38.7411 20.4871C37.2237 20.4871 35.9585 19.9151 34.9476 18.7711C33.9346 17.6291 33.4302 16.2864 33.4302 14.7472C33.4302 13.2079 33.9346 11.8653 34.9476 10.7232C35.9585 9.5792 37.2237 9.00719 38.7411 9.00719C39.7084 9.00719 40.6002 9.26935 41.4125 9.79767C42.2268 10.326 42.8763 11.0191 43.3589 11.8772V9.66658C43.3589 9.55734 43.4046 9.45208 43.492 9.35278ZM35.607 18.1117C36.4432 19.0789 37.4879 19.5636 38.7411 19.5636C39.9944 19.5636 41.0391 19.0789 41.8753 18.1117C42.7114 17.1444 43.1285 16.0223 43.1285 14.7472C43.1285 13.4721 42.7114 12.3499 41.8753 11.3826C41.0391 10.4154 39.9944 9.93075 38.7411 9.93075C37.4879 9.93075 36.4432 10.4154 35.607 11.3826C34.7708 12.3499 34.3537 13.4721 34.3537 14.7472C34.3537 16.0223 34.7708 17.1444 35.607 18.1117Z" fill="white"/>
                <path d="M62.4952 9.2634C62.8031 9.2634 62.956 9.41633 62.956 9.72418V22.9202C62.956 23.1843 62.8805 23.4703 62.7256 23.7782C62.1774 25.1844 60.9778 26.0662 59.1307 26.4178C58.7553 26.5052 58.3164 26.5489 57.8099 26.5489C57.1286 26.5489 56.3362 26.3999 55.4345 26.104C54.5328 25.806 53.8952 25.4267 53.5218 24.9659C53.4126 24.8567 53.357 24.7454 53.357 24.6362C53.357 24.5031 53.4066 24.3939 53.5059 24.3065C53.6052 24.2191 53.7085 24.1734 53.8178 24.1734C53.8634 24.1734 54.0601 24.2946 54.4136 24.5369C54.7632 24.7792 55.2478 25.0215 55.8635 25.2618C56.4792 25.5041 57.1286 25.6253 57.8099 25.6253C58.1853 25.6253 58.5686 25.5916 58.9658 25.526C60.4157 25.24 61.373 24.5925 61.8358 23.5796C61.9669 23.2499 62.0344 23.0294 62.0344 22.9202V17.8734C61.5498 18.6658 60.9123 19.2974 60.1198 19.7701C59.3293 20.2428 58.4812 20.4792 57.5795 20.4792C56.0621 20.4792 54.7969 19.9072 53.786 18.7632C52.775 17.6191 52.2686 16.2785 52.2686 14.7392C52.2686 13.1999 52.775 11.8573 53.786 10.7133C54.7969 9.57124 56.0621 8.99923 57.5795 8.99923C58.4812 8.99923 59.3293 9.2356 60.1198 9.7083C60.9123 10.181 61.5498 10.8126 62.0344 11.6051V9.72418C62.0344 9.5931 62.0821 9.48385 62.1814 9.39447C62.2807 9.3051 62.386 9.2634 62.4952 9.2634ZM54.4454 18.1037C55.2815 19.071 56.3263 19.5556 57.5795 19.5556C58.8328 19.5556 59.8775 19.071 60.7137 18.1037C61.5498 17.1365 61.9669 16.0143 61.9669 14.7392C61.9669 13.4621 61.5498 12.3419 60.7137 11.3727C59.8775 10.4054 58.8328 9.9228 57.5795 9.9228C56.3263 9.9228 55.2815 10.4054 54.4454 11.3727C53.6092 12.3419 53.1921 13.4621 53.1921 14.7392C53.1921 16.0143 53.6092 17.1365 54.4454 18.1037Z" fill="white"/>
                <path d="M77.9091 9.26343C78.2388 9.26343 78.4037 9.40443 78.4037 9.69242C78.4037 9.97644 78.2607 10.1433 77.9747 10.187C76.6777 10.3836 75.6985 10.9556 75.0391 11.901C74.3797 12.8464 74.0481 14.0024 74.0481 15.3649V19.7861C74.0481 20.0939 73.8951 20.2468 73.5853 20.2468C73.2794 20.2468 73.1245 20.0939 73.1245 19.7861V9.72421C73.1245 9.41636 73.2794 9.26343 73.5853 9.26343C73.8951 9.26343 74.0481 9.41636 74.0481 9.72421V11.77C74.4671 11.0887 75.0272 10.4988 75.7303 10.0043C76.4354 9.50971 77.1603 9.26343 77.9091 9.26343Z" fill="white"/>
                <path d="M96.9183 9.37859C97.0056 9.27928 97.1168 9.22962 97.2479 9.22962C97.379 9.22962 97.4903 9.27928 97.5777 9.37859C97.667 9.47591 97.7087 9.58116 97.7087 9.69239V19.7542C97.7087 20.0621 97.5558 20.215 97.2479 20.215C96.9401 20.215 96.7872 20.0621 96.7872 19.7542V17.641C96.3026 18.499 95.6531 19.1922 94.8407 19.7205C94.0264 20.2468 93.1347 20.5129 92.1674 20.5129C90.65 20.5129 89.3848 19.9409 88.3738 18.7969C87.3629 17.6529 86.8564 16.3103 86.8564 14.771C86.8564 13.2317 87.3629 11.8911 88.3738 10.747C89.3848 9.60302 90.65 9.03101 92.1674 9.03101C93.1347 9.03101 94.0264 9.29517 94.8407 9.82348C95.6531 10.3518 96.3026 11.043 96.7872 11.901V9.69239C96.7872 9.58116 96.8309 9.47591 96.9183 9.37859ZM89.0333 18.1375C89.8694 19.1048 90.9141 19.5874 92.1674 19.5874C93.4207 19.5874 94.4654 19.1048 95.3015 18.1375C96.1377 17.1683 96.5548 16.0481 96.5548 14.771C96.5548 13.4959 96.1377 12.3737 95.3015 11.4064C94.4654 10.4392 93.4207 9.95457 92.1674 9.95457C90.9141 9.95457 89.8694 10.4392 89.0333 11.4064C88.1971 12.3737 87.78 13.4959 87.78 14.771C87.78 16.0481 88.1971 17.1683 89.0333 18.1375Z" fill="white"/>
                <path d="M120.746 9.06478C122.043 9.06478 123.075 9.54344 123.844 10.4988C124.615 11.4561 125 12.5942 125 13.913V19.8198C125 19.9509 124.95 20.0621 124.851 20.1495C124.752 20.2369 124.648 20.2806 124.539 20.2806C124.231 20.2806 124.076 20.1276 124.076 19.8198V13.913C124.076 12.8365 123.784 11.9129 123.203 11.1423C122.621 10.3737 121.8 9.98833 120.746 9.98833C119.469 9.98833 118.511 10.5325 117.876 11.621C117.236 12.7114 116.918 13.9249 116.918 15.2675V19.8198C116.918 19.9509 116.869 20.0621 116.769 20.1495C116.67 20.2369 116.565 20.2806 116.456 20.2806C116.148 20.2806 115.995 20.1276 115.995 19.8198V13.913C115.995 12.8365 115.703 11.9129 115.119 11.1423C114.537 10.3737 113.717 9.98833 112.662 9.98833C111.319 9.98833 110.33 10.461 109.693 11.4064C109.055 12.3518 108.757 13.5952 108.801 15.1345V15.3649V19.8198C108.801 20.1276 108.648 20.2806 108.34 20.2806C108.032 20.2806 107.877 20.1276 107.877 19.8198V9.72418C107.877 9.41632 108.032 9.2634 108.34 9.2634C108.648 9.2634 108.801 9.41632 108.801 9.72418V11.4064C109.683 9.84532 110.968 9.06478 112.662 9.06478C113.586 9.06478 114.394 9.32894 115.087 9.85726C115.78 10.3836 116.279 11.0986 116.589 12.0003C116.984 11.1204 117.544 10.4114 118.271 9.87314C118.996 9.33489 119.82 9.06478 120.746 9.06478Z" fill="white"/>
                <path fillRule="evenodd" d="M24.3281 8.13924C24.0778 8.09554 23.8375 8.26238 23.7938 8.51263L21.8394 19.5914C21.7957 19.8416 21.9645 20.082 22.2148 20.1257C22.465 20.1713 22.7054 20.0025 22.7491 19.7523L24.7034 8.6735C24.7471 8.42324 24.5783 8.18293 24.3281 8.13924Z" fill="white"/>
            </svg>
    );
};

export default Logo;