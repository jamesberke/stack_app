import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import React from 'react';

class Splash extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="splashpage-whole-main">
            <div className="splashpage-first">
              <video
                autoPlay
                loop
                muted
                src="https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_hero-video.mp4"
                type="video/mp4"
                id="rollingball-gif"
              />
              <h1 className="splashpage-first-bigtitle">
                Stack replaces email inside your company
              </h1>
              <p className="splashpage-first-text">
                Keep conversations organized in Stack, the smart alternative to
                email.
              </p>
              <br />
              <br />
              <Link to="/signup" className="splash-signup-link">
                TRY STACK
              </Link>
              <Link to="/signup" className="demo-signup-link">
                SEE THE DEMO
              </Link>
              <br></br>
              <p className="splash-already-sign-in">
                Already using Stack?{" "}
                <Link to="./login" className="splash-login-link">
                  Sign In
                </Link>
              </p>
            </div>
            <br></br>
            <div className="splashpage-second">
              <h1 className="splashpage-second-title">
                Break out of the inbox
              </h1>
              <p className="splashpage-second-text">
                Working in channels gives everyone on your team a shared view of
                progress and purpose.
              </p>
              <br />
            </div>
            <br />
            <div className="splashpage-third">
              <div className="third-col">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2801 8.4721V4.0001C21.2801 3.09836 20.9219 2.23356 20.2843 1.59593C19.6466 0.958311 18.7818 0.600098 17.8801 0.600098H4.0001C3.09901 0.60221 2.23543 0.961102 1.59827 1.59827C0.961102 2.23543 0.60221 3.09901 0.600098 4.0001V17.8801C0.600098 18.7818 0.958311 19.6466 1.59593 20.2843C2.23356 20.9219 3.09836 21.2801 4.0001 21.2801H8.4721C8.73073 23.4222 9.58659 25.4484 10.9419 27.1273C12.2973 28.8062 14.0974 30.0701 16.1368 30.7746C18.1763 31.4791 20.3727 31.5959 22.4753 31.1116C24.578 30.6273 26.502 29.5614 28.0277 28.0357C29.5534 26.51 30.6193 24.586 31.1036 22.4833C31.5879 20.3807 31.4711 18.1843 30.7666 16.1448C30.0621 14.1054 28.7982 12.3053 27.1193 10.9499C25.4404 9.59459 23.4142 8.73873 21.2721 8.4801L21.2801 8.4721ZM2.6001 17.8801V4.0001C2.6022 3.62944 2.75037 3.27457 3.01247 3.01247C3.27457 2.75037 3.62944 2.6022 4.0001 2.6001H17.8801C18.2514 2.6001 18.6075 2.7476 18.87 3.01015C19.1326 3.2727 19.2801 3.62879 19.2801 4.0001V8.4161C16.4487 8.56969 13.7737 9.76359 11.7687 11.7687C9.76359 13.7737 8.56969 16.4487 8.4161 19.2801H4.0001C3.62879 19.2801 3.2727 19.1326 3.01015 18.87C2.7476 18.6075 2.6001 18.2514 2.6001 17.8801V17.8801ZM19.2801 10.4001V17.8641C19.2801 18.2354 19.1326 18.5915 18.87 18.854C18.6075 19.1166 18.2514 19.2641 17.8801 19.2641H10.4001C10.5509 16.9601 11.5354 14.7897 13.1695 13.1585C14.8037 11.5273 16.9758 10.5468 19.2801 10.4001V10.4001ZM19.8961 29.3841C17.619 29.3807 15.4186 28.5613 13.694 27.0744C11.9694 25.5876 10.8348 23.5318 10.4961 21.2801H17.8801C18.7818 21.2801 19.6466 20.9219 20.2843 20.2843C20.9219 19.6466 21.2801 18.7818 21.2801 17.8801V10.4961C23.6512 10.8498 25.8011 12.0865 27.2989 13.9584C28.7967 15.8303 29.5317 18.1991 29.3567 20.5901C29.1816 22.981 28.1095 25.2175 26.355 26.8513C24.6006 28.4851 22.2935 29.3955 19.8961 29.4001V29.3841Z"
                    fill="#1D1C1D"
                  />
                </svg>
                <h3 className="splash-col-title">Conversations, organized</h3>
                <div className="splash-col-content">
                  Instead of a single overstuffed inbox, conversations in Stack
                  happen in dedicated spaces called channels.
                </div>
              </div>
              <div className="third-col">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9999 0.599854H3.99985C3.09877 0.601966 2.23519 0.960858 1.59802 1.59802C0.960858 2.23519 0.601966 3.09877 0.599854 3.99985V23.1999C0.609135 23.9187 0.846598 24.6161 1.27797 25.1913C1.70934 25.7664 2.31231 26.1897 2.99985 26.3999V27.9999C3.00197 28.9009 3.36086 29.7645 3.99802 30.4017C4.63519 31.0388 5.49877 31.3977 6.39985 31.3999H25.5999C26.5009 31.3977 27.3645 31.0388 28.0017 30.4017C28.6388 29.7645 28.9977 28.9009 28.9999 27.9999V26.3999C29.6874 26.1897 30.2904 25.7664 30.7217 25.1913C31.1531 24.6161 31.3906 23.9187 31.3999 23.1999V3.99985C31.3977 3.09877 31.0388 2.23519 30.4017 1.59802C29.7645 0.960858 28.9009 0.601966 27.9999 0.599854V0.599854ZM26.9999 27.9999C26.9978 28.3705 26.8496 28.7254 26.5875 28.9875C26.3254 29.2496 25.9705 29.3978 25.5999 29.3999H6.39985C6.0292 29.3978 5.67432 29.2496 5.41222 28.9875C5.15013 28.7254 5.00195 28.3705 4.99985 27.9999V26.5999H26.9999V27.9999ZM29.3999 23.1999C29.3978 23.5705 29.2496 23.9254 28.9875 24.1875C28.7254 24.4496 28.3705 24.5978 27.9999 24.5999H3.99985C3.6292 24.5978 3.27432 24.4496 3.01222 24.1875C2.75013 23.9254 2.60195 23.5705 2.59985 23.1999V3.99985C2.60195 3.6292 2.75013 3.27432 3.01222 3.01222C3.27432 2.75013 3.6292 2.60195 3.99985 2.59985H27.9999C28.3705 2.60195 28.7254 2.75013 28.9875 3.01222C29.2496 3.27432 29.3978 3.6292 29.3999 3.99985V23.1999Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M9.94386 6.19189H6.06386C5.67505 6.19189 5.35986 6.50709 5.35986 6.89589V10.7759C5.35986 11.1647 5.67505 11.4799 6.06386 11.4799H9.94386C10.3327 11.4799 10.6479 11.1647 10.6479 10.7759V6.89589C10.6479 6.50709 10.3327 6.19189 9.94386 6.19189Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M9.94386 15.7119H6.06386C5.67505 15.7119 5.35986 16.0271 5.35986 16.4159V20.2959C5.35986 20.6847 5.67505 20.9999 6.06386 20.9999H9.94386C10.3327 20.9999 10.6479 20.6847 10.6479 20.2959V16.4159C10.6479 16.0271 10.3327 15.7119 9.94386 15.7119Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M14.0959 17.408H24.1359C24.4012 17.408 24.6555 17.3026 24.8431 17.1151C25.0306 16.9275 25.1359 16.6732 25.1359 16.408C25.1359 16.1427 25.0306 15.8884 24.8431 15.7009C24.6555 15.5133 24.4012 15.408 24.1359 15.408H14.0959C13.8307 15.408 13.5764 15.5133 13.3888 15.7009C13.2013 15.8884 13.0959 16.1427 13.0959 16.408C13.0959 16.6732 13.2013 16.9275 13.3888 17.1151C13.5764 17.3026 13.8307 17.408 14.0959 17.408Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M25.5039 19.312H14.0959C13.8307 19.312 13.5764 19.4174 13.3888 19.6049C13.2013 19.7924 13.0959 20.0468 13.0959 20.312C13.0959 20.5772 13.2013 20.8316 13.3888 21.0191C13.5764 21.2067 13.8307 21.312 14.0959 21.312H25.5039C25.7692 21.312 26.0235 21.2067 26.2111 21.0191C26.3986 20.8316 26.5039 20.5772 26.5039 20.312C26.5039 20.0468 26.3986 19.7924 26.2111 19.6049C26.0235 19.4174 25.7692 19.312 25.5039 19.312V19.312Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M14.0959 7.88794H24.1359C24.4012 7.88794 24.6555 7.78258 24.8431 7.59505C25.0306 7.40751 25.1359 7.15316 25.1359 6.88794C25.1359 6.62272 25.0306 6.36837 24.8431 6.18083C24.6555 5.9933 24.4012 5.88794 24.1359 5.88794H14.0959C13.8307 5.88794 13.5764 5.9933 13.3888 6.18083C13.2013 6.36837 13.0959 6.62272 13.0959 6.88794C13.0959 7.15316 13.2013 7.40751 13.3888 7.59505C13.5764 7.78258 13.8307 7.88794 14.0959 7.88794Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M25.5039 9.79199H14.0959C13.8307 9.79199 13.5764 9.89735 13.3888 10.0849C13.2013 10.2724 13.0959 10.5268 13.0959 10.792C13.0959 11.0572 13.2013 11.3116 13.3888 11.4991C13.5764 11.6866 13.8307 11.792 14.0959 11.792H25.5039C25.7692 11.792 26.0235 11.6866 26.2111 11.4991C26.3986 11.3116 26.5039 11.0572 26.5039 10.792C26.5039 10.5268 26.3986 10.2724 26.2111 10.0849C26.0235 9.89735 25.7692 9.79199 25.5039 9.79199V9.79199Z"
                    fill="#1D1C1D"
                  />
                </svg>
                <h3 className="splash-col-title">Get looped in, not out</h3>
                <div className="splash-col-content">
                  Stack makes it simple to follow conversations or find
                  important information in an easily searchable archive.
                </div>
              </div>
              <div className="third-col">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.368 20.672C31.2703 19.9419 30.9089 19.2728 30.3518 18.7909C29.7947 18.3089 29.0805 18.0476 28.344 18.056C27.7707 18.0699 27.2056 18.1949 26.68 18.424V13.064C26.6896 12.6675 26.62 12.273 26.4753 11.9037C26.3307 11.5343 26.1138 11.1976 25.8375 10.913C25.5611 10.6285 25.2308 10.4019 24.8658 10.2465C24.5009 10.0911 24.1086 10.01 23.712 10.008C23.4208 9.61344 23.037 9.2965 22.5946 9.08509C22.1521 8.87367 21.6644 8.77425 21.1745 8.79559C20.6845 8.81693 20.2074 8.95836 19.7849 9.20744C19.3625 9.45652 19.0078 9.80562 18.752 10.224L18.456 10.272V9.16801C18.4595 8.46886 18.2231 7.78966 17.7864 7.24371C17.3496 6.69776 16.7388 6.31808 16.056 6.16801C15.9527 5.49034 15.6198 4.86869 15.113 4.40707C14.6062 3.94544 13.9563 3.67183 13.272 3.63201C13.0149 3.21523 12.6597 2.86772 12.2373 2.61982C11.815 2.37192 11.3384 2.23118 10.8492 2.20987C10.36 2.18857 9.87296 2.28735 9.43069 2.49759C8.98842 2.70784 8.60434 3.02315 8.31198 3.41601C7.91331 3.41482 7.51845 3.49354 7.1507 3.6475C6.78296 3.80147 6.4498 4.02756 6.1709 4.31243C5.89199 4.59731 5.673 4.93518 5.52685 5.30609C5.3807 5.67701 5.31036 6.07345 5.31998 6.47201V11.832C4.79434 11.6029 4.22923 11.4779 3.65598 11.464C2.91943 11.4556 2.20524 11.7169 1.64816 12.1989C1.09108 12.6808 0.729625 13.3499 0.631981 14.08C0.552507 14.8597 0.761925 15.6414 1.22052 16.277C1.67911 16.9125 2.35499 17.3577 3.11998 17.528C3.84798 17.736 5.51998 19.376 6.53598 20.728C7.14245 21.583 7.94476 22.2804 8.87584 22.7619C9.80692 23.2435 10.8397 23.4952 11.888 23.496H12.272C12.7022 23.4723 13.1286 23.4026 13.544 23.288V23.368C13.5253 25.0649 14.1548 26.7051 15.3039 27.9538C16.4531 29.2026 18.0353 29.9659 19.728 30.088H20.112C21.1602 30.0872 22.193 29.8355 23.1241 29.3539C24.0552 28.8724 24.8575 28.175 25.464 27.32C26.504 25.968 28.152 24.32 28.88 24.12C29.645 23.9497 30.3209 23.5045 30.7794 22.869C31.238 22.2334 31.4475 21.4517 31.368 20.672V20.672ZM13.544 15.76V21.36C13.1048 21.5353 12.6401 21.638 12.168 21.664H11.888C11.1271 21.6662 10.3769 21.4858 9.7003 21.1377C9.02372 20.7897 8.4406 20.2843 7.99998 19.664C7.99998 19.664 5.43198 16.312 3.59998 15.8C1.76798 15.288 2.27198 13.256 3.65598 13.256C5.03998 13.256 7.11198 15.136 7.11198 15.136V6.47201C7.10566 6.18989 7.19576 5.91405 7.36739 5.69005C7.53903 5.46606 7.78193 5.3073 8.05598 5.24001C8.14112 5.23177 8.22685 5.23177 8.31198 5.24001H8.47998V11.888C8.47998 12.1002 8.56427 12.3037 8.7143 12.4537C8.86432 12.6037 9.06781 12.688 9.27998 12.688C9.49215 12.688 9.69564 12.6037 9.84567 12.4537C9.9957 12.3037 10.08 12.1002 10.08 11.888V4.17601C10.2645 4.06028 10.4781 3.99925 10.696 4.00001C10.8701 4.00007 11.0422 4.0383 11.2 4.11201V12.04C11.2 12.2522 11.2843 12.4557 11.4343 12.6057C11.5843 12.7557 11.7878 12.84 12 12.84C12.2122 12.84 12.4156 12.7557 12.5657 12.6057C12.7157 12.4557 12.8 12.2522 12.8 12.04V5.46401C12.8931 5.45583 12.9868 5.45583 13.08 5.46401C13.38 5.47598 13.6649 5.59852 13.88 5.80801V11.568C13.88 11.7802 13.9643 11.9837 14.1143 12.1337C14.2643 12.2837 14.4678 12.368 14.68 12.368C14.8922 12.368 15.0956 12.2837 15.2457 12.1337C15.3957 11.9837 15.48 11.7802 15.48 11.568V7.92001H15.624C15.909 7.97652 16.1649 8.13196 16.3464 8.35886C16.5279 8.58577 16.6234 8.86953 16.616 9.16001V11.264C16.268 11.7066 16.0542 12.2396 16 12.8C15.3135 12.9374 14.695 13.3064 14.2479 13.8452C13.8009 14.384 13.5524 15.0599 13.544 15.76ZM28.4 22.4C26.568 22.904 24.016 26.264 24.016 26.264C23.5773 26.8924 22.9932 27.4054 22.3134 27.7592C21.6336 28.113 20.8783 28.2972 20.112 28.296H19.832C18.5985 28.1967 17.4488 27.6325 16.6156 26.7176C15.7823 25.8027 15.3278 24.6054 15.344 23.368V15.76C15.3408 15.4873 15.4277 15.2211 15.5911 15.0027C15.7545 14.7843 15.9854 14.6259 16.248 14.552V19.44C16.248 19.6522 16.3323 19.8557 16.4823 20.0057C16.6323 20.1557 16.8358 20.24 17.048 20.24C17.2602 20.24 17.4636 20.1557 17.6137 20.0057C17.7637 19.8557 17.848 19.6522 17.848 19.44V12.688C17.9448 12.4849 18.0965 12.3128 18.2859 12.1912C18.4753 12.0697 18.6949 12.0034 18.92 12C19.0147 12.0009 19.1088 12.0144 19.2 12.04V19.24C19.2 19.4522 19.2843 19.6557 19.4343 19.8057C19.5843 19.9557 19.7878 20.04 20 20.04C20.2122 20.04 20.4156 19.9557 20.5657 19.8057C20.7157 19.6557 20.8 19.4522 20.8 19.24V10.704C21.0062 10.6069 21.2363 10.5718 21.4621 10.6031C21.688 10.6343 21.8998 10.7305 22.072 10.88V19.136C22.072 19.3482 22.1563 19.5517 22.3063 19.7017C22.4563 19.8517 22.6598 19.936 22.872 19.936C23.0842 19.936 23.2876 19.8517 23.4377 19.7017C23.5877 19.5517 23.672 19.3482 23.672 19.136V11.808C23.7571 11.7998 23.8428 11.7998 23.928 11.808C24.202 11.8753 24.4449 12.0341 24.6166 12.2581C24.7882 12.482 24.8783 12.7579 24.872 13.04V21.728C24.872 21.728 26.96 19.848 28.328 19.848C29.696 19.848 30.264 21.872 28.4 22.4Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M21.544 6.50396C21.6286 6.53471 21.7179 6.55094 21.808 6.55196C21.9743 6.55072 22.1361 6.49766 22.2709 6.40016C22.4057 6.30266 22.5067 6.16557 22.56 6.00796L23.464 3.39996C23.5114 3.29842 23.5369 3.18806 23.539 3.07601C23.541 2.96397 23.5195 2.85275 23.4758 2.74955C23.4321 2.64636 23.3672 2.5535 23.2853 2.47698C23.2034 2.40047 23.1064 2.34201 23.0005 2.30539C22.8946 2.26877 22.7822 2.25481 22.6705 2.26442C22.5589 2.27402 22.4505 2.30698 22.3524 2.36115C22.2543 2.41532 22.1687 2.48949 22.1011 2.57886C22.0335 2.66824 21.9854 2.77082 21.96 2.87996L21.048 5.48796C20.9791 5.68847 20.9927 5.90809 21.0857 6.09859C21.1787 6.28908 21.3435 6.43488 21.544 6.50396V6.50396Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M18.7919 6.30413H18.8479C18.9531 6.29703 19.0558 6.26922 19.1502 6.2223C19.2445 6.17539 19.3287 6.11029 19.3978 6.03075C19.467 5.95121 19.5197 5.85879 19.553 5.7588C19.5863 5.65882 19.5996 5.55324 19.5919 5.44813L19.3839 2.52013C19.3691 2.30795 19.2706 2.11037 19.11 1.97084C19.0305 1.90176 18.9382 1.849 18.8384 1.81559C18.7385 1.78218 18.633 1.76877 18.5279 1.77613C18.3158 1.79098 18.1182 1.88951 17.9787 2.05004C17.8391 2.21057 17.7691 2.41995 17.7839 2.63213L17.9919 5.60013C18.0155 5.79526 18.1101 5.97487 18.2577 6.10472C18.4052 6.23456 18.5954 6.30555 18.7919 6.30413Z"
                    fill="#1D1C1D"
                  />
                  <path
                    d="M24.32 8.22397C24.4316 8.22371 24.542 8.20008 24.6439 8.15462C24.7459 8.10915 24.8372 8.04285 24.912 7.95997L26.896 5.79197C27.0392 5.63496 27.1142 5.42749 27.1044 5.2152C27.0947 5.00291 27.001 4.80319 26.844 4.65997C26.687 4.51676 26.4795 4.44178 26.2672 4.45153C26.0549 4.46128 25.8552 4.55496 25.712 4.71197L23.736 6.88797C23.5981 7.04329 23.526 7.24616 23.5349 7.45369C23.5439 7.66121 23.6332 7.85712 23.784 7.99997C23.9283 8.13916 24.1196 8.2191 24.32 8.22397Z"
                    fill="#1D1C1D"
                  />
                </svg>
                <h3 className="splash-col-title">Give focus a chance</h3>
                <div className="splash-col-content">
                  Stack lets you choose which conversations are
                  most important — and which can wait.
                </div>
              </div>
            </div>
            <div className="splashpage-footer">
                <div className="footer-greeting">
                    <img src={window.slackLogo} className="slack-logo-footer" />
                    <div className="footer-text">
                        Choose a better way to work
                    </div>
                </div>
                <div className="footer-buttons">
                    <Link to='/signup' className='footer-signup-link'>
                        TRY STACK
                    </Link>
                    <a href="https://www.linkedin.com/in/james-berke-33912718a/"
                        className="footer-contact-link"
                        target="_blank">
                        CONTACT ME
                    </a>
                </div>
            </div>
          </div>
        );
    }
}

export default Splash;