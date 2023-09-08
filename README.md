# Healing

- 카페 기능의 react기반 웹
- MBTI별 게시판에 글을 작성할 수 있습니다.

### A. 개발 팀원

- [권오현](https://github.com/fbre0717)
- [엄창용](https://github.com/um8389)

---

### B. 개발 환경

- OS: Windows 10
- Front : React
- Back : Express
- Database: MySQL
- Language: Javascript
- IDE: VSCode

---

### C. Magor features

#### 메인 페이지

- 회원가입시 이메일, 비밀번호로 로그인하고, 이름과 MBTI를 입력합니다.
- MBTI별로 게시판이 존재하며, 본인의 MBTI 게시판과 모두의 게시판에만 게시글을 작성할 수 있습니다.
  
---

### D. 기술 및 로직

#### React
- JSX 기반으로 작성한다.
- react-router-dom의 Link를 이용하여 클라이언트 사이드에서 라우팅을 하였다.
- useEffect를 이용하여 페이지가 로딩될때 새로운 정보들을 가져올 수 있도록 하였다.

#### MySQL
- MySQL workbench를 이용하여 데이터를 관리하였다.
- User와 Post Table을 이용하여 로그인과 게시판의 글을 관리하였다.
