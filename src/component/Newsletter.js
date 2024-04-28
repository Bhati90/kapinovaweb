import { useState } from "react";

const Newsletter = () => {
  const [inputData, setInputData] = useState('');

  const submitData = () => {
    // If there's some data in the input field, show the thank you message
    if (inputData.trim() !== "") {
      alert("Thank you for subscribing");
      // Clear the input field after showing the message
      setInputData('');
    } else {
      // If the input field is empty, show an alert asking the user to enter some data
      alert("Please enter some data");
    }
  

    // Send the data to the backend (you need to replace '/your/backend/endpoint' with the actual endpoint URL)
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: inputData })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data sent successfully:', data);
        // Clear the input field after successful submission
        setInputData('');
        // Show a thank you message
        alert("Thank you for subscribing");
      })
      .catch(error => {
        console.error('There was a problem sending the data:', error);
        // Handle errors here
      });
  };
    return (
      <div className="w-[31.25rem] flex flex-col items-start justify-start gap-[1.5rem] min-w-[31.25rem] max-w-full text-left text-[1rem] text-black font-text-small-link mq800:min-w-full mq1325:flex-1">
        <img
          className="relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/Logo.png"
        />
        <div className="self-stretch relative leading-[150%]">
          Join our newsletter to stay up to date on features and releases.
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[0.75rem]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] max-w-full mq450:flex-wrap">
            <div className="flex-1 bg-white box-border flex flex-row items-center justify-start py-[0.625rem] px-[0.687rem] min-w-[14.813rem] max-w-full border-[1px] border-solid border-black">
              <input
                className="w-full [border:none] [outline:none] font-text-small-link text-[1rem] bg-[transparent] h-[1.5rem] flex-1 relative leading-[150%] text-neutral-dark-gray text-left inline-block min-w-[12.813rem] max-w-full p-0"
                placeholder="Enter your email"
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
            </div>
            <button className="cursor-pointer py-[0.625rem] px-[1.437rem] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[1rem] leading-[150%] font-text-small-link text-black text-left inline-block min-w-[4.438rem]" onClick={submitData}>
                Subscribe
              </div>
            </button>
          </div>
          <div className="self-stretch relative leading-[150%]">
            {`By subscribing you agree to with our `}
            <span className="[text-decoration:underline]">
              Privacy Policy
            </span>{" "}
            and provide consent to receive updates from our company.
          </div>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  