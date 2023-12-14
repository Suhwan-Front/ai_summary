# GPI AI 회고록 서비스  

개발 과정 : 
1. http://chat.openai.com/ 에서 프롬프트를 개발하고 테스트 진행 ✅  
2. Open API key 발급 후 연동
3. 프롬프트를 코드로 변환 (시스템, 보조자, 사용자로 구분)
    - 시스템: ChatGPT에게 전제, 배경 설명 (ex. 너는 이제부터 심리 상담가야) 
    - 보조자: 이전 내용을 바탕으로 프롬프트에게 요청 하고자 할 때 사용 (ex. 퓨샷러닝)
    - 사용자: 이 서비스를 사용할 이용자

기술 스택: React, Styled-component, Antd, Vite, Typescript