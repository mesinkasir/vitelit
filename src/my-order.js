import { html, LitElement } from 'lit';

export class MyOrder extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Tata Cara Order Pemesanan';
    this.url = 'order.html';
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="/css/home.css" rel="stylesheet" />
    <h1><strong><a href="${this.url}">${this.title}</a></strong></h1>
    <p>Pastikan anda sudah mendapatkan desain serta kalkulasi sesuai kebutuhan selanjutnya anda, dapat melakukan order dengan cara berikut ini.</p><p><ul><li>Request penawaran order kepada staff marketing kami</li><li>Cek penawaran dari staff marketing kami</li><li>Melakukan pembayaran dengan cara full maupun DP 50%, sisa 50% wajib dilakukan pelunasan saat unit order ready dan siap kirim ke ekspedisi</li><li>Payment via BCA Bank : 0181884109- Atas nama Suci Chanifah</li><li>Konfirmasi pembayaran anda kepada staff marketing kami, untuk selanjutnya akan di forward ke bagian admin.</li><li>Setelah proses administrasi selesai maka unit order akan aktif masuk ke bagian produksi.</li><li>Lama pengerjaan estimasi 16 hari s/d 30 hari kerja tergantung dari banyaknya order anda.</li><li>Setelah unit order ready nantinya anda akan di kabari oleh staff marketing kami.</li><li>Dan unit order anda pun siap untuk dikirimkan ke ekspedisi rekanan anda</li><li>Unit order sampai di lokasi anda dan selamat kini anda sudah siap untuk upgrade bisnis usaha menjadi lebih modern dengan produk rak display kami.</li><ul></p> 
      <slot></slot>
    `;
  }
}

window.customElements.define('my-order', MyOrder);
