// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।

const h2Collection = document.getElementsByClassName('light-blue')

// console.log(h2Collection);
for (const h2 of h2Collection) {
    // console.log(h2.innerText);
    h2.style.color = 'lightblue';
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।

const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}


// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
function message() {
    console.log("hello form JS file");
}


// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

const buttons = document.getElementsByClassName('panda-btn')
for (const btn of buttons) {
    btn.addEventListener('click', function (event) {
        btn.parentElement.removeChild(event.target);
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।
document.getElementById('input-email').addEventListener('keyup', function (event) {
    const emailText = event.target.value;
    if (emailText === 'email') {
        document.getElementById('email-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('email-btn').setAttribute('disabled', true);
    }
})





// shoes section
const shoe1 = document.getElementById('shoe-img-1');
shoe1.addEventListener('mouseenter', function () {
    shoe1.src = 'images/shoes/shoe-2.png';
})
shoe1.addEventListener('mouseleave', function () {
    shoe1.src = 'images/shoes/shoe-1.png';
})

const shoe2 = document.getElementById('shoe-img-2');
shoe2.addEventListener('mouseenter', function () {
    shoe2.src = 'images/shoes/shoe-3.png';
})
shoe2.addEventListener('mouseleave', function () {
    shoe2.src = 'images/shoes/shoe-2.png';
})

const shoe3 = document.getElementById('shoe-img-3');
shoe3.addEventListener('mouseenter', function () {
    shoe3.src = 'images/shoes/shoe-1.png';
})
shoe3.addEventListener('mouseleave', function () {
    shoe3.src = 'images/shoes/shoe-3.png';
})

// bags section
const bag1 = document.getElementById('bags-img-1');
bag1.addEventListener('mouseenter', function () {
    bag1.src = 'images/bags/bag-3.png';
})
bag1.addEventListener('mouseleave', function () {
    bag1.src = 'images/bags/bag-1.png';
})

const bag2 = document.getElementById('bags-img-2');
bag2.addEventListener('mouseenter', function () {
    bag2.src = 'images/bags/bag-3.png';
})
bag2.addEventListener('mouseleave', function () {
    bag2.src = 'images/bags/bag-2.png';
})

const bag3 = document.getElementById('bags-img-3');
bag3.addEventListener('mouseenter', function () {
    bag3.src = 'images/bags/bag-1.png';
})
bag3.addEventListener('mouseleave', function () {
    bag3.src = 'images/bags/bag-3.png';
})

// (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('dblclick', function () {
    subscribe.style.backgroundColor = '#d0f8de';
})
