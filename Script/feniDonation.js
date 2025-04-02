document.getElementById('feni-donation-btn').addEventListener('click', function () {
    const donationBalance = getInnerTextById('donation-balance');
    const feniDonationBalance = getInnerTextById('feni-donation-balance');
    const feniDonationAmount = getInputValueById('feni-donation-input-field');

    if (isNaN(feniDonationAmount)) {
        alert("Invalid Input Value");
        return;
    }

    if (donationBalance < feniDonationAmount || feniDonationAmount < 0) {
        alert('No Enough Money For Donation ');
        return;
    }
    if (feniDonationAmount < donationBalance) {
        const feniDonationNewBalance = feniDonationAmount + feniDonationBalance;
        document.getElementById('feni-donation-balance').innerText = feniDonationNewBalance;
        const donationNewBalance = donationBalance - feniDonationAmount;
        document.getElementById('donation-balance').innerText = donationNewBalance;

        // Show Modal 

        const donationContainer = document.getElementById('donation-container');

        const modal = document.createElement('div');
        modal.innerHTML = `
        
        <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
        <h3 class="text-4xl text-center font-bold font-[Lexend]">Congrets!</h3>
        <img class="mx-auto mt-8" src="/assets/coin.png" alt="">
        <p class="py-4 text-gray-400 text-center">You have Donated for Humankind</p>
        <h3 class="text-center text-3xl font-bold font-[Lexend]"> Successfully </h3>
        <div class="modal-action">
        <form method="dialog"  class="mx-auto">
         <!-- if there is a button in form, it will close the modal -->
         <button class="btn w-[250px] md:w-[400px] ">Close</button>
        </form>
       </div>
     </div>
  </dialog>
        
        `;
        donationContainer.appendChild(modal);
        document.getElementById('my_modal_1').showModal();


        // Show Donation History
        const bdTime = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
            hour12: true,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        const donationHistory = document.getElementById('history-container');

        const donationHistoryItem = document.createElement('div');
        donationHistoryItem.innerHTML = `
            
   <div class="card bg-[#ffff] shadow-lg  w-full mt-5">
  <div class="card-body">
    <h2 class="card-title text-[#111] font-[Lexend] text-2xl font-bold">${feniDonationAmount}Tk Donate for Flood Relief in Feni,Bangladesh
</h2>
    <p class="text-[#1111118c] font-[Lexend] text-[16px] font-light">Date: ${bdTime} GMT +0600 (Bangladesh Standard Time)</p>
  </div>
</div>
            
            `;
        donationHistory.appendChild(donationHistoryItem);



    }






}); 