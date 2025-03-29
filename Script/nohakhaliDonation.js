document.getElementById('noakhali-donation-btn').addEventListener('click', function () {
    const donationBalance = getInnerTextById('donation-balance');
    const donationAmount = getInputValueById('noakhali-donation-input-field');
    const noakhaliDonationAmount = getInnerTextById('noakhali-donation-balance');
    if (isNaN(donationAmount)) {
        alert('Invalid Input');
        return;
    }
    if (donationAmount > donationBalance || donationAmount < 0) {
        alert('No Enough Money to Donate');
        return;
    }
    if (donationAmount < donationBalance) {
        const noakhaliDonationNewBalance = donationAmount + noakhaliDonationAmount;
        const donationNewBalance = donationBalance - donationAmount;
        document.getElementById('donation-balance').innerText = donationNewBalance;
        document.getElementById('noakhali-donation-balance').innerText = noakhaliDonationNewBalance;

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