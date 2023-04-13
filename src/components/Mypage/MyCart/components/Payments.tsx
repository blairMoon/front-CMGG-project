export interface PayProps {
  name: string;
  amount: number;
  buyer_email: string;
  buyer_name: string;
  buyer_tel: string;
  lectures: number[];
  buyer_id: string;
}

export function requestPay(props: PayProps) {
  if (!window.IMP) return;
  var IMP = window.IMP;
  IMP.init("imp21417627");

  var today = new Date();
  var hours = today.getHours(); // 시
  var minutes = today.getMinutes(); // 분
  var seconds = today.getSeconds(); // 초
  var milliseconds = today.getMilliseconds();
  var makeMerchantUid = hours + minutes + seconds + milliseconds;

  IMP.request_pay(
    {
      pg: "tosspayments",
      pay_method: "card",
      merchant_uid: "IMP" + makeMerchantUid,
      name: props.name,
      amount: props.amount,
      buyer_email: props.buyer_email,
      buyer_name: props.buyer_name,
      buyer_tel: props.buyer_tel,
      display: {
        card_quota: [3], // 할부개월 3개월까지 활성화
      },
    },
    function (rsp) {
      // callback
      if (rsp.success) {
        console.log(rsp, props.lectures, props.buyer_id);
      } else {
        console.log(rsp);
      }
    }
  );
}
