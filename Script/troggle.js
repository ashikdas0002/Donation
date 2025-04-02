document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.remove('troggle-btn-1');
    document.getElementById('donation-btn').classList.add('troggle-btn-2');
    document.getElementById('history-btn').classList.remove('troggle-btn-2');
    document.getElementById('history-btn').classList.add('troggle-btn-1');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');


})
document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.remove('troggle-btn-1');
    document.getElementById('history-btn').classList.add('troggle-btn-2');
    document.getElementById('donation-btn').classList.remove('troggle-btn-2');
    document.getElementById('donation-btn').classList.add('troggle-btn-1');
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');


})