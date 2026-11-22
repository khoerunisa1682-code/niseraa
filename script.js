// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Product Category Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    filterButtons.forEach(btn => {
      btn.classList.remove('active', 'bg-taupe-700', 'text-cream-50');
      btn.classList.add('bg-cream-100', 'text-taupe-800');
    });

    button.classList.add('active', 'bg-taupe-700', 'text-cream-50');
    button.classList.remove('bg-cream-100', 'text-taupe-800');

    productCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Quick Order Modal & WhatsApp Redirect
const orderModal = document.getElementById('order-modal');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const orderForm = document.getElementById('whatsapp-order-form');

let selectedProduct = '';
let selectedPrice = '';

function openOrderModal(productName, productPrice) {
  selectedProduct = productName;
  selectedPrice = productPrice;
  modalProductName.textContent = productName;
  modalProductPrice.textContent = productPrice;
  orderModal.classList.remove('hidden');
  orderModal.classList.add('flex');
}

function closeOrderModal() {
  orderModal.classList.add('hidden');
  orderModal.classList.remove('flex');
}

if (orderModal) {
  orderModal.addEventListener('click', (e) => {
    if (e.target === orderModal) closeOrderModal();
  });
}

if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cust-name').value.trim();
    const size = document.getElementById('cust-size').value;
    const qty = document.getElementById('cust-qty').value;

    const message = `Halo NISERA, saya ingin memesan:%0A` +
      `• Produk: *${selectedProduct}* (${selectedPrice})%0A` +
      `• Ukuran: ${size}%0A` +
      `• Jumlah: ${qty} pcs%0A` +
      `• Nama Pemesan: ${name}%0A%0A` +
      `Mohon info ketersediaan dan total pembayarannya. Terima kasih!`;

    const waUrl = `https://wa.me/6285600759304?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    closeOrderModal();
  });
}
