const CTA = () => {
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
      <section className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap items-center justify-center py-[7rem] px-[4rem] box-border gap-[5rem] max-w-full text-left text-[2.5rem] text-black font-text-small-link mq800:gap-[2.5rem] mq800:pl-[2rem] mq800:pr-[2rem] mq800:box-border mq450:gap-[1.25rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[29.188rem] max-w-full mq800:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-[2rem] mq800:leading-[2.375rem] mq450:text-[1.5rem] mq450:leading-[1.813rem]">
            Join our newsletter
          </h1>
          <div className="self-stretch relative text-[1.125rem] leading-[150%]">{`Stay in the loop with exclusive offers, industry insights, and the latest updates subscribe to our newsletter today`}</div>
        </div>
        <div className="w-[32.063rem] flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1rem] text-neutral-dark-gray">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] max-w-full mq800:flex-wrap">
            <div className="flex-1 bg-white box-border flex flex-row items-center justify-start py-[0.625rem] px-[0.687rem] min-w-[16rem] whitespace-nowrap max-w-full border-[1px] border-solid border-black">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                Enter your email
              </div>
            </div>
            <button className="cursor-pointer py-[0.625rem] px-[1.437rem] bg-black flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-darkslategray-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-[1rem] leading-[150%] font-text-small-link text-white text-left inline-block min-w-[3.438rem]">
                Sign Up
              </div>
            </button>
          </div>
          <div className="self-stretch relative text-[0.75rem] leading-[150%] text-black">
            {`By clicking Sign Up you're confirming that you agree with our `}
            <span className="[text-decoration:underline]">
              Terms and Conditions
            </span>
            .
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;
  
