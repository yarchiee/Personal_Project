import { useSearchParams } from "react-router-dom";

function GithubOauth() {
  const [searchParams] = useSearchParams();
  const { code, state } = Object.fromEntries([...searchParams]);

  const onRequest = () => {
    fetch("https://fast-mesa-61999.herokuapp.com/oauth", {
      method: "POST",
      body: JSON.stringify({
        client_id: "Iv1.26af70ff6861a253",
        client_secret: "7ffa3c681276c2c0369bec0c11facf000c4c77b7",
        code: code,
      }),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then(async (res) => {
      console.log(await res.json());
      return await res.json();
    });
  };

  return (
    <>
      <h1>OAuth 實作</h1>
      <p>
        參考：https://docs.github.com/en/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
      </p>
      <p>
        1. 前置作業：新增一個 Github app，開通相關權限 (以新專案為例要 issue
        權限)
      </p>
      <p>取得 client id、設定 callback url 也就是回來的網址</p>
      <p>2. 組出網址：</p>
      <p>
        需要 client_id、redirect_uri 必須跟前面設定 callback url 相同、state
        通關密語、login 欲登入的使用者
      </p>
      <p>
        https://github.com/login/oauth/authorize?client_id=Iv1.26af70ff6861a253&redirect_uri=http://localhost:3000/checkout&state=abcdefg&login=yarchiee
      </p>
      <p>組合網址這邊先寫死，之後會需要動態組出</p>
      <a href="https://github.com/login/oauth/authorize?client_id=Iv1.26af70ff6861a253&redirect_uri=http://localhost:3000/github-ooath&state=abcdefg&login=yarchiee">
        GO Github
      </a>
      <p>
        按完會前往 github 登入頁面，認證後就會導回來，注意網址會增加 code &
        state 兩項，state 必須是前面填的通關密碼
      </p>
      <p>{`state: ${state}, code: ${code}`}</p>
      <p>
        3. 使用 API 搭配指定 body 取得 access token，POST
        https://github.com/login/oauth/access_token
      </p>
      <button onClick={onRequest}>REQUEST API</button>
    </>
  );
}
export default GithubOauth;
