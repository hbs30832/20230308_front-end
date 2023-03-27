// src/Gallery.jsx
// Gallery 컴포넌트에 사용하면서도 다른 컴포넌트에 사용할 수 있다.
export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

// 다른 컴포넌트에서 사용할 수 있도록 export.
export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
