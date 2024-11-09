import { Component } from '@angular/core';

@Component({
  selector: 'lht-contribute',
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.scss'
})
export class ContributeComponent {
  optionContribute = [
    {
      id: 0,
      title: 'Đặt hàng theo thiết kế',
      amount: 10000,
      description: 'Nghệ thuật đến từ những cái nhìn mới lạ và độc đáo, chúng tôi luôn sẵn sàng triển khai những ý tưởng của bạn thành những sản phẩm tuyệt vời.',
      command: () => { alert('Routing detail') }
    },
    {
      id: 1,
      title: 'Mua hàng với sự tư vấn nội thất',
      description: 'Với độ ngũ tư vấn viên nhiệt tình, chúng tôi sẵn sàng hỗ trợ các bạn thiết kế không gian văn phòng nhà ở với các sản phẩm gạch men nghệ thuật.',
      command: () => { alert('Routing detail') }
    },
    {
      id: 2,
      title: 'Trở thành nhà phân phối',
      description: 'Ký kết các họp đồng từ lô đến lâu dài. Chúng tôi sẽ là nhà cung ứng uy tín, trách nhiệm nhất mà các bạn tìm thấy.',
      command: () => { alert('Routing detail') }
    }
  ]
}
