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





    }






}); 