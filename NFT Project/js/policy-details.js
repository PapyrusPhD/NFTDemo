window.onload = loadView;

function loadView() {
  var x = document.getElementsByClassName("tabs-data");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById("info-view").style.display = "block";

  var tabItem = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabItem.length; i++) {
    tabItem[i].classList.remove("active");
  }

  document.getElementById("info-tab").classList.add("active");
}

function openTabs(option) {
  var tab = option + "-tab";
  var view = option + "-view";
  var x = document.getElementsByClassName("tabs-data");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(view).style.display = "block";

  var tabItem = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabItem.length; i++) {
    tabItem[i].classList.remove("active");
  }

  document.getElementById(tab).classList.add("active");
}

function selectCoupon(index) {
  var cardItems = document.getElementsByClassName("discount-option");
  for (i = 0; i < cardItems.length; i++) {
    cardItems[i].classList.remove("active");
    cardItems[i].getElementsByClassName("h-label-2")[0].classList.remove("active-label");
  }

  var card = document.getElementsByClassName("discount-option")[index];
  var label = card.getElementsByClassName("h-label-2")[0];

  card.classList.add("active");
  label.classList.add("active-label");

  var discountLabel = document.getElementById("applyDiscountLabel");
  var totalPayableLabel = document.getElementById("totalPayableLabel");

  if(index === 0) {
    discountLabel.innerText = '10% (-125.00)'
    totalPayableLabel.innerText = 'HKD 1,125.00'
  } 
  else if(index === 1){
    discountLabel.innerText = '50% (-625.00)'
    totalPayableLabel.innerText = 'HKD 625.00'
  }
  else if(index === 2){
    discountLabel.innerText = '75% (-937.50)'
    totalPayableLabel.innerText = 'HKD 312.50'
  }
  else {
    discountLabel.innerText = '0% (-0.00)'
    totalPayableLabel.innerText = 'HKD 1,250.00'
  }
}

function showPaymentOption() {
  var paymentOptions = document.getElementById('paymentOptions');
  $(paymentOptions).toggle("slow");
}

function selectPaymentOption() {
  var paymentOptions = document.getElementById('visa-mastercard');
  var confirmBtn = document.getElementById('confirmBtn');

  if(paymentOptions.classList.contains('active')){
    paymentOptions.classList.remove('active');
    $(confirmBtn).prop('disabled', true)
  } else {
    paymentOptions.classList.add('active');
    $(confirmBtn).prop('disabled', false)
  }
}

function openTabs2(Options2) {
  var i2;
  var x2 = document.getElementsByClassName("information2");
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].style.display = "none";
  }
  document.getElementById(Options2).style.display = "block";
}

function coupon() {
  var value = document.getElementById("coupon-option").value;
  var nft_discount = document.getElementById("nft-discount");
  var total_amount = document.getElementById("total-amount");
  const contribution = 40000;
  var discount;
  var total;
  switch (value) {
    case "NFT-1":
      discount = contribution * 0.1;
      total = contribution - discount;

      nft_discount.innerHTML = "- " + discount;
      total_amount.innerHTML = total;
      break;
    case "NFT-2":
      discount = contribution * 0.15;
      total = contribution - discount;

      nft_discount.innerHTML = "- " + discount;
      total_amount.innerHTML = total;
      break;
    case "NFT-3":
      discount = contribution * 0.12;
      total = contribution - discount;

      nft_discount.innerHTML = "- " + discount;
      total_amount.innerHTML = total;
      break;
  }
}
