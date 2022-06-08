import styles from "../styles/layout.module.css";

export default function Layout({ children }: any) {
  return (
    <>
      <div className={styles.layout}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
