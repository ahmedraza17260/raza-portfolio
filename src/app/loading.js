export default function Loading() {
  return (
    <>
      <style>{`
        .spinner-container {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #0b0c10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 99999;
        }

        .loader-text {
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0.05rem;
          margin-top: 25px;
          text-align: center;
        }

        /* SpinKit Circle Styles */
        .sk-circle {
          width: 40px;
          height: 40px;
          position: relative;
        }
        
        .sk-circle .sk-child {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        
        .sk-circle .sk-child:before {
          content: '';
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          background-color: #66fcf1; /* Your signature accent cyan color */
          border-radius: 100%;
          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        }
        
        .sk-circle .sk-circle2 { -webkit-transform: rotate(30deg);  -ms-transform: rotate(30deg);  transform: rotate(30deg);  }
        .sk-circle .sk-circle3 { -webkit-transform: rotate(60deg);  -ms-transform: rotate(60deg);  transform: rotate(60deg);  }
        .sk-circle .sk-circle4 { -webkit-transform: rotate(90deg);  -ms-transform: rotate(90deg);  transform: rotate(90deg);  }
        .sk-circle .sk-circle5 { -webkit-transform: rotate(120deg); -ms-transform: rotate(120deg); transform: rotate(120deg); }
        .sk-circle .sk-circle6 { -webkit-transform: rotate(150deg); -ms-transform: rotate(150deg); transform: rotate(150deg); }
        .sk-circle .sk-circle7 { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); }
        .sk-circle .sk-circle8 { -webkit-transform: rotate(210deg); -ms-transform: rotate(210deg); transform: rotate(210deg); }
        .sk-circle .sk-circle9 { -webkit-transform: rotate(240deg); -ms-transform: rotate(240deg); transform: rotate(240deg); }
        .sk-circle .sk-circle10 { -webkit-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg); }
        .sk-circle .sk-circle11 { -webkit-transform: rotate(300deg); -ms-transform: rotate(300deg); transform: rotate(300deg); }
        .sk-circle .sk-circle12 { -webkit-transform: rotate(330deg); -ms-transform: rotate(330deg); transform: rotate(330deg); }

        @-webkit-keyframes sk-circleBounceDelay {
          0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 
          40% { -webkit-transform: scale(1); transform: scale(1); }
        }
        @keyframes sk-circleBounceDelay {
          0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 
          40% { -webkit-transform: scale(1); transform: scale(1); }
        }
      `}</style>

      {/* THE JSX MARKUP */}
      <div className="spinner-container">
        <div className="sk-circle">
          {[...Array(12)].map((_, i) => (
            <div key={i + 1} className={`sk-circle${i + 1} sk-child`} />
          ))}
        </div>
        <h2 className="loader-text">Please Recite Darood Shareef</h2>
      </div>
    </>
  );
}