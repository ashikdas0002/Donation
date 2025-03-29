document.getElementById('quota-donation-btn').addEventListener('click', function () {
    const donationBalance = getInnerTextById('donation-balance');
    const qutoDonationBalance = getInnerTextById('quota-donation-balance');
    const quotaDonationAmount = getInputValueById('quota-donation-input-field');
    if (isNaN(quotaDonationAmount)) {
        alert('Invalid Input');
        return;
    }
    if (quotaDonationAmount > donationBalance || quotaDonationAmount < 0) {
        alert('No Enough Money');
        return;
    }
    if (donationBalance > quotaDonationAmount) {
        const quotaDonationNewBalance = qutoDonationBalance + quotaDonationAmount;
        document.getElementById('quota-donation-balance').innerText = quotaDonationNewBalance;
        const newDonationBalance = donationBalance - quotaDonationAmount;
        document.getElementById('donation-balance').innerText = newDonationBalance;

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