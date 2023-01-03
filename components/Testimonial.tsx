export default function Testimonial() {
  return (
    <section className="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div className="relative">
          <div className="flex justify-center mx-auto">
            <svg
              width="300"
              height="80"
              viewBox="0 0 121 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.5"
                cx="19.5111"
                cy="20.5"
                r="13.5"
                fill="#EDAC00"
              />
              <path
                d="M19.5 11.875V28.4062M19.5 28.4062C18.0893 28.4062 16.7381 28.6602 15.4894 29.125M19.5 28.4062C20.9107 28.4062 22.2619 28.6602 23.5106 29.125M25.9687 13.7629C23.8256 13.4621 21.6641 13.3116 19.5 13.3125C17.3045 13.3125 15.1444 13.4658 13.0312 13.7629M25.9687 13.7629C26.9367 13.9 27.895 14.0667 28.8437 14.2612M10.1562 14.2612C11.105 14.0667 12.0633 13.9 13.0312 13.7629M25.9687 13.7629L28.4796 24.042C28.5965 24.5202 28.378 25.0272 27.9151 25.1939C27.2907 25.418 26.6322 25.5322 25.9687 25.5312C25.3053 25.5322 24.6468 25.418 24.0224 25.1939C23.5595 25.0272 23.341 24.5202 23.457 24.042L25.9687 13.7639V13.7629ZM13.0312 13.7629L15.5421 24.042C15.659 24.5202 15.4405 25.0272 14.9776 25.1939C14.3532 25.418 13.6947 25.5321 13.0312 25.5312C12.3678 25.5321 11.7093 25.418 11.0849 25.1939C10.622 25.0272 10.4035 24.5202 10.5195 24.042L13.0312 13.7639V13.7629Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M39.616 26.368C39.32 26.368 39.06 26.344 38.836 26.296C38.612 26.248 38.416 26.132 38.248 25.948C38.088 25.764 38.008 25.48 38.008 25.096C38.008 24.56 38.168 23.84 38.488 22.936C38.816 22.032 39.244 21.124 39.772 20.212C39.372 20.236 39.056 20.296 38.824 20.392C38.592 20.488 38.44 20.636 38.368 20.836C38.4 20.836 38.432 20.876 38.464 20.956C38.504 21.036 38.524 21.12 38.524 21.208C38.524 21.352 38.46 21.468 38.332 21.556C38.204 21.636 38.044 21.676 37.852 21.676C37.628 21.676 37.448 21.616 37.312 21.496C37.176 21.376 37.108 21.204 37.108 20.98C37.108 20.708 37.212 20.46 37.42 20.236C37.636 20.012 37.932 19.836 38.308 19.708C38.684 19.572 39.1 19.504 39.556 19.504C39.724 19.504 39.932 19.516 40.18 19.54C40.836 18.5 41.528 17.652 42.256 16.996C42.992 16.332 43.692 16 44.356 16C44.74 16 45.056 16.056 45.304 16.168L43.42 25H41.692L42.616 20.644C42.32 20.508 42.048 20.408 41.8 20.344C41.552 20.28 41.288 20.236 41.008 20.212C40.552 21.196 40.176 22.204 39.88 23.236C39.592 24.26 39.448 25.08 39.448 25.696C39.448 26 39.504 26.224 39.616 26.368ZM43.42 16.852C43.076 17.036 42.716 17.38 42.34 17.884C41.972 18.38 41.612 18.984 41.26 19.696C41.836 19.808 42.324 19.948 42.724 20.116L43.42 16.852ZM46.6116 25.072C46.0676 25.072 45.6516 24.94 45.3636 24.676C45.0756 24.404 44.9316 24.024 44.9316 23.536C44.9316 23.296 44.9596 23.068 45.0156 22.852L46.2996 16.84L48.0756 16.6L47.4996 19.3C47.7236 19.164 47.9076 19.076 48.0516 19.036C48.1956 18.988 48.3396 18.964 48.4836 18.964C49.4276 18.964 49.8996 19.648 49.8996 21.016C49.8996 21.568 49.7916 22.16 49.5756 22.792C49.3676 23.416 49.0156 23.952 48.5196 24.4C48.0316 24.848 47.3956 25.072 46.6116 25.072ZM47.2836 23.908C47.5316 23.908 47.7636 23.756 47.9796 23.452C48.1956 23.14 48.3676 22.756 48.4956 22.3C48.6236 21.836 48.6876 21.392 48.6876 20.968C48.6876 20.648 48.6316 20.376 48.5196 20.152C48.4076 19.928 48.2516 19.816 48.0516 19.816C47.9316 19.816 47.7956 19.836 47.6436 19.876C47.4996 19.908 47.3996 19.96 47.3436 20.032L46.6836 23.08C46.6596 23.176 46.6476 23.268 46.6476 23.356C46.6476 23.724 46.8596 23.908 47.2836 23.908ZM52.4597 28C52.0837 28 51.7517 27.876 51.4637 27.628C51.1837 27.388 51.0437 27.08 51.0437 26.704C51.0437 26.352 51.1317 26.064 51.3077 25.84C51.4837 25.616 51.7117 25.44 51.9917 25.312C52.2717 25.184 52.6477 25.048 53.1197 24.904L53.2277 24.4C52.8117 24.848 52.3317 25.072 51.7877 25.072C51.3317 25.072 50.9517 24.916 50.6477 24.604C50.3437 24.292 50.1917 23.804 50.1917 23.14C50.1917 22.548 50.3077 21.928 50.5397 21.28C50.7797 20.624 51.1317 20.072 51.5957 19.624C52.0677 19.168 52.6277 18.94 53.2757 18.94C53.6037 18.94 53.8477 18.996 54.0077 19.108C54.1677 19.22 54.2477 19.368 54.2477 19.552V19.576L54.3677 19H56.1077L54.6437 25.96C54.4837 26.728 54.1997 27.26 53.7917 27.556C53.3917 27.852 52.9477 28 52.4597 28ZM52.5677 23.908C52.7517 23.908 52.9357 23.832 53.1197 23.68C53.3117 23.52 53.4477 23.296 53.5277 23.008L54.1397 20.104C54.0757 19.824 53.9117 19.684 53.6477 19.684C53.3277 19.684 53.0397 19.872 52.7837 20.248C52.5277 20.616 52.3277 21.064 52.1837 21.592C52.0397 22.112 51.9677 22.572 51.9677 22.972C51.9677 23.372 52.0237 23.628 52.1357 23.74C52.2557 23.852 52.3997 23.908 52.5677 23.908ZM52.1837 26.932C52.3277 26.932 52.4637 26.856 52.5917 26.704C52.7197 26.56 52.8197 26.324 52.8917 25.996L53.0357 25.288C52.6117 25.432 52.2837 25.6 52.0517 25.792C51.8197 25.984 51.7037 26.232 51.7037 26.536C51.7037 26.632 51.7517 26.72 51.8477 26.8C51.9437 26.888 52.0557 26.932 52.1837 26.932ZM57.4333 25.048C57.1693 25.048 56.9453 24.956 56.7613 24.772C56.5773 24.588 56.4853 24.364 56.4853 24.1C56.4853 23.836 56.5773 23.612 56.7613 23.428C56.9453 23.236 57.1693 23.14 57.4333 23.14C57.6973 23.14 57.9213 23.236 58.1053 23.428C58.2973 23.612 58.3933 23.836 58.3933 24.1C58.3933 24.364 58.2973 24.588 58.1053 24.772C57.9213 24.956 57.6973 25.048 57.4333 25.048ZM66.2832 25.156C65.8032 25.156 65.3152 24.944 64.8192 24.52L64.7232 25H62.9952L64.6272 17.368L66.4032 17.128L64.9632 23.86C65.1872 24.02 65.4152 24.1 65.6472 24.1C66.1032 24.1 66.5032 23.836 66.8472 23.308C67.1992 22.78 67.4712 22.108 67.6632 21.292C67.8552 20.476 67.9512 19.652 67.9512 18.82C67.9512 18.036 67.7952 17.464 67.4832 17.104C67.1792 16.736 66.7512 16.552 66.1992 16.552C65.5992 16.552 65.0592 16.672 64.5792 16.912C64.1072 17.144 63.7352 17.48 63.4632 17.92C63.1912 18.36 63.0552 18.876 63.0552 19.468C63.0552 19.764 63.0832 19.972 63.1392 20.092C63.1952 20.204 63.2232 20.268 63.2232 20.284C62.8072 20.284 62.4872 20.196 62.2632 20.02C62.0472 19.844 61.9392 19.56 61.9392 19.168C61.9392 18.624 62.1432 18.108 62.5512 17.62C62.9592 17.132 63.5032 16.74 64.1832 16.444C64.8712 16.148 65.6112 16 66.4032 16C67.4992 16 68.3072 16.324 68.8272 16.972C69.3472 17.62 69.6072 18.448 69.6072 19.456C69.6072 20.368 69.4512 21.268 69.1392 22.156C68.8352 23.036 68.4272 23.756 67.9152 24.316C67.4032 24.876 66.8592 25.156 66.2832 25.156ZM71.8282 18.352C71.5642 18.352 71.3402 18.26 71.1562 18.076C70.9722 17.892 70.8802 17.668 70.8802 17.404C70.8802 17.14 70.9722 16.916 71.1562 16.732C71.3402 16.54 71.5642 16.444 71.8282 16.444C72.0922 16.444 72.3162 16.54 72.5002 16.732C72.6922 16.916 72.7882 17.14 72.7882 17.404C72.7882 17.668 72.6922 17.892 72.5002 18.076C72.3162 18.26 72.0922 18.352 71.8282 18.352ZM71.0122 25.072C70.6282 25.072 70.3162 24.952 70.0762 24.712C69.8442 24.472 69.7282 24.112 69.7282 23.632C69.7282 23.432 69.7602 23.172 69.8242 22.852L70.6402 19H72.3682L71.5042 23.08C71.4722 23.2 71.4562 23.328 71.4562 23.464C71.4562 23.624 71.4922 23.74 71.5642 23.812C71.6442 23.876 71.7722 23.908 71.9482 23.908C72.1802 23.908 72.3962 23.812 72.5962 23.62C72.7962 23.42 72.9402 23.164 73.0282 22.852H73.5322C73.2362 23.716 72.8562 24.304 72.3922 24.616C71.9282 24.92 71.4682 25.072 71.0122 25.072ZM74.4634 25.072C74.0074 25.072 73.6274 24.916 73.3234 24.604C73.0194 24.292 72.8674 23.804 72.8674 23.14C72.8674 22.548 72.9834 21.928 73.2154 21.28C73.4554 20.624 73.8074 20.072 74.2714 19.624C74.7434 19.168 75.3034 18.94 75.9514 18.94C76.2794 18.94 76.5234 18.996 76.6834 19.108C76.8434 19.22 76.9234 19.368 76.9234 19.552V19.636L77.0554 19H78.7834L77.9194 23.08C77.8874 23.2 77.8714 23.328 77.8714 23.464C77.8714 23.808 78.0354 23.98 78.3634 23.98C78.5874 23.98 78.7794 23.876 78.9394 23.668C79.1074 23.46 79.2394 23.188 79.3354 22.852H79.8394C79.5434 23.716 79.1754 24.304 78.7354 24.616C78.3034 24.92 77.8674 25.072 77.4274 25.072C77.0914 25.072 76.8194 24.98 76.6114 24.796C76.4114 24.604 76.2914 24.328 76.2514 23.968C76.0194 24.296 75.7594 24.564 75.4714 24.772C75.1914 24.972 74.8554 25.072 74.4634 25.072ZM75.2434 23.908C75.4434 23.908 75.6394 23.816 75.8314 23.632C76.0314 23.44 76.1674 23.18 76.2394 22.852L76.8154 20.14C76.8154 20.036 76.7754 19.936 76.6954 19.84C76.6154 19.736 76.4914 19.684 76.3234 19.684C76.0034 19.684 75.7154 19.872 75.4594 20.248C75.2034 20.616 75.0034 21.064 74.8594 21.592C74.7154 22.112 74.6434 22.572 74.6434 22.972C74.6434 23.372 74.6994 23.628 74.8114 23.74C74.9314 23.852 75.0754 23.908 75.2434 23.908ZM83.6718 25.072C83.1838 25.072 82.8238 24.944 82.5918 24.688C82.3678 24.424 82.2558 24.1 82.2558 23.716C82.2558 23.548 82.2758 23.36 82.3158 23.152C82.3558 22.936 82.3958 22.728 82.4358 22.528C82.4838 22.328 82.5158 22.2 82.5318 22.144C82.5958 21.864 82.6558 21.588 82.7118 21.316C82.7678 21.044 82.7958 20.824 82.7958 20.656C82.7958 20.248 82.6518 20.044 82.3638 20.044C82.1558 20.044 81.9718 20.148 81.8118 20.356C81.6518 20.556 81.5238 20.82 81.4278 21.148L80.6118 25H78.8838L80.1558 19H81.8838L81.7518 19.624C82.1518 19.176 82.6198 18.952 83.1558 18.952C83.5638 18.952 83.8878 19.064 84.1278 19.288C84.3678 19.512 84.4878 19.852 84.4878 20.308C84.4878 20.54 84.4598 20.8 84.4038 21.088C84.3478 21.368 84.2678 21.712 84.1638 22.12C84.0998 22.368 84.0398 22.612 83.9838 22.852C83.9358 23.084 83.9118 23.268 83.9118 23.404C83.9118 23.564 83.9478 23.688 84.0198 23.776C84.0918 23.864 84.2158 23.908 84.3918 23.908C84.6318 23.908 84.8238 23.824 84.9678 23.656C85.1118 23.48 85.2558 23.212 85.3998 22.852H85.9038C85.6078 23.732 85.2638 24.324 84.8718 24.628C84.4878 24.924 84.0878 25.072 83.6718 25.072ZM86.8384 25.072C86.3824 25.072 86.0024 24.916 85.6984 24.604C85.3944 24.292 85.2424 23.804 85.2424 23.14C85.2424 22.548 85.3584 21.928 85.5904 21.28C85.8304 20.624 86.1824 20.072 86.6464 19.624C87.1184 19.168 87.6784 18.94 88.3264 18.94C88.6544 18.94 88.8984 18.996 89.0584 19.108C89.2184 19.22 89.2984 19.368 89.2984 19.552V19.636L89.4304 19H91.1584L90.2944 23.08C90.2624 23.2 90.2464 23.328 90.2464 23.464C90.2464 23.624 90.2824 23.74 90.3544 23.812C90.4344 23.876 90.5624 23.908 90.7384 23.908C90.8504 23.908 90.9384 23.892 91.0024 23.86C90.8264 24.308 90.6584 24.624 90.4984 24.808C90.3384 24.984 90.1064 25.072 89.8024 25.072C89.4744 25.072 89.2064 24.976 88.9984 24.784C88.7984 24.584 88.6744 24.308 88.6264 23.956C88.1384 24.7 87.5424 25.072 86.8384 25.072ZM87.6184 23.908C87.8184 23.908 88.0144 23.816 88.2064 23.632C88.4064 23.44 88.5424 23.18 88.6144 22.852L89.1904 20.14C89.1904 20.036 89.1504 19.936 89.0704 19.84C88.9904 19.736 88.8664 19.684 88.6984 19.684C88.3784 19.684 88.0904 19.872 87.8344 20.248C87.5784 20.616 87.3784 21.064 87.2344 21.592C87.0904 22.112 87.0184 22.572 87.0184 22.972C87.0184 23.372 87.0744 23.628 87.1864 23.74C87.3064 23.852 87.4504 23.908 87.6184 23.908ZM97.0456 25.072C96.3736 25.072 95.8456 24.88 95.4616 24.496C95.0856 24.112 94.8976 23.5 94.8976 22.66C94.8976 21.948 95.0256 21.148 95.2816 20.26C95.5376 19.372 95.9096 18.612 96.3976 17.98C96.8936 17.348 97.4776 17.032 98.1496 17.032C98.3896 17.032 98.5976 17.064 98.7736 17.128C98.4216 17.336 98.0816 17.764 97.7536 18.412C97.4336 19.06 97.1736 19.784 96.9736 20.584C96.7736 21.384 96.6736 22.092 96.6736 22.708C96.6736 23.14 96.7296 23.48 96.8416 23.728C96.9536 23.976 97.1296 24.1 97.3696 24.1C97.7616 24.1 98.1496 23.82 98.5336 23.26C98.9256 22.692 99.2456 21.98 99.4936 21.124C99.7496 20.268 99.8776 19.444 99.8776 18.652C99.8776 18.156 99.8336 17.76 99.7456 17.464C99.6656 17.16 99.5136 16.932 99.2896 16.78C99.0656 16.628 98.7496 16.552 98.3416 16.552C97.7256 16.552 97.1536 16.68 96.6256 16.936C96.0976 17.184 95.6736 17.544 95.3536 18.016C95.0416 18.48 94.8856 19.02 94.8856 19.636C94.8856 19.852 94.9056 20.012 94.9456 20.116C94.9856 20.212 95.0056 20.268 95.0056 20.284C94.6056 20.284 94.3016 20.204 94.0936 20.044C93.8936 19.884 93.7936 19.628 93.7936 19.276C93.7936 18.724 94.0176 18.196 94.4656 17.692C94.9216 17.188 95.5216 16.78 96.2656 16.468C97.0176 16.156 97.8056 16 98.6296 16C99.6296 16 100.354 16.272 100.802 16.816C101.25 17.36 101.474 18.112 101.474 19.072C101.474 19.928 101.314 20.82 100.994 21.748C100.674 22.676 100.178 23.464 99.5056 24.112C98.8416 24.752 98.0216 25.072 97.0456 25.072ZM102.77 25.072C102.386 25.072 102.074 24.952 101.834 24.712C101.602 24.472 101.486 24.112 101.486 23.632C101.486 23.432 101.518 23.172 101.582 22.852L102.866 16.84L104.642 16.6L103.262 23.08C103.23 23.2 103.214 23.328 103.214 23.464C103.214 23.624 103.25 23.74 103.322 23.812C103.402 23.876 103.53 23.908 103.706 23.908C103.938 23.908 104.154 23.812 104.354 23.62C104.554 23.42 104.698 23.164 104.786 22.852H105.29C104.994 23.716 104.614 24.304 104.15 24.616C103.686 24.92 103.226 25.072 102.77 25.072ZM106.785 18.352C106.521 18.352 106.297 18.26 106.113 18.076C105.929 17.892 105.837 17.668 105.837 17.404C105.837 17.14 105.929 16.916 106.113 16.732C106.297 16.54 106.521 16.444 106.785 16.444C107.049 16.444 107.273 16.54 107.457 16.732C107.649 16.916 107.745 17.14 107.745 17.404C107.745 17.668 107.649 17.892 107.457 18.076C107.273 18.26 107.049 18.352 106.785 18.352ZM105.969 25.072C105.585 25.072 105.273 24.952 105.033 24.712C104.801 24.472 104.685 24.112 104.685 23.632C104.685 23.432 104.717 23.172 104.781 22.852L105.597 19H107.325L106.461 23.08C106.429 23.2 106.413 23.328 106.413 23.464C106.413 23.624 106.449 23.74 106.521 23.812C106.601 23.876 106.729 23.908 106.905 23.908C107.137 23.908 107.353 23.812 107.553 23.62C107.753 23.42 107.897 23.164 107.985 22.852H108.489C108.193 23.716 107.813 24.304 107.349 24.616C106.885 24.92 106.425 25.072 105.969 25.072ZM109.348 25.072C108.884 25.072 108.52 24.956 108.256 24.724C108 24.484 107.872 24.128 107.872 23.656C107.872 23.464 107.892 23.272 107.932 23.08L108.796 19H110.524L109.66 23.08C109.62 23.28 109.6 23.424 109.6 23.512C109.6 23.776 109.736 23.908 110.008 23.908C110.376 23.908 110.716 23.676 111.028 23.212C111.348 22.748 111.604 22.196 111.796 21.556C111.988 20.916 112.084 20.364 112.084 19.9C112.068 19.94 112.016 19.972 111.928 19.996C111.84 20.012 111.764 20.02 111.7 20.02C111.564 20.02 111.456 19.956 111.376 19.828C111.304 19.7 111.268 19.56 111.268 19.408C111.268 19.216 111.328 19.06 111.448 18.94C111.576 18.82 111.764 18.76 112.012 18.76C112.276 18.76 112.468 18.86 112.588 19.06C112.708 19.252 112.768 19.5 112.768 19.804C112.768 20.524 112.644 21.296 112.396 22.12C112.148 22.936 111.768 23.632 111.256 24.208C110.744 24.784 110.108 25.072 109.348 25.072ZM114.701 25.048C114.109 25.048 113.641 24.896 113.297 24.592C112.953 24.288 112.781 23.808 112.781 23.152C112.781 22.6 112.889 21.996 113.105 21.34C113.321 20.676 113.673 20.104 114.161 19.624C114.649 19.136 115.273 18.892 116.033 18.892C116.977 18.892 117.485 19.432 117.557 20.512C117.733 20.472 117.889 20.376 118.025 20.224C118.161 20.064 118.289 19.884 118.409 19.684H118.793C118.577 20.116 118.385 20.456 118.217 20.704C118.049 20.944 117.829 21.14 117.557 21.292C117.509 22.044 117.353 22.704 117.089 23.272C116.833 23.84 116.497 24.28 116.081 24.592C115.665 24.896 115.205 25.048 114.701 25.048ZM115.181 23.968C115.477 23.968 115.753 23.728 116.009 23.248C116.265 22.768 116.441 22.176 116.537 21.472C116.345 21.4 116.249 21.22 116.249 20.932C116.249 20.62 116.361 20.412 116.585 20.308C116.569 20.052 116.525 19.876 116.453 19.78C116.389 19.676 116.281 19.624 116.129 19.624C115.865 19.624 115.613 19.816 115.373 20.2C115.133 20.576 114.937 21.036 114.785 21.58C114.641 22.116 114.569 22.588 114.569 22.996C114.569 23.38 114.613 23.64 114.701 23.776C114.789 23.904 114.949 23.968 115.181 23.968Z"
                fill="black"
              />
            </svg>
          </div>
          <blockquote>
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
              <p>
                Mi experiencia con la abogada Diana Olivo ha sido excepcional.
                No solo es una abogada altamente capacitada y con un amplio
                conocimiento técnico en derecho civil, sino que también es una
                persona muy amable y comprensiva. Me sentí muy cómodo confiando
                en ella mi problema y aprecié mucho su paciencia y su dedicación
                a encontrar las mejores soluciones para mí. Si alguna vez
                necesito asesoramiento o defensa en derecho civil de nuevo, sin
                duda volveré a confiar en ella. ¡La recomiendo encarecidamente!
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    Abel Pomares
                  </div>

                  <svg
                    className="mx-1 hidden h-5 w-5 text-rob-roy-600 md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    La Universal
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
