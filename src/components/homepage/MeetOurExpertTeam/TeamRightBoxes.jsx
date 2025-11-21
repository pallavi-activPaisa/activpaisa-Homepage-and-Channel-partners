export default function TeamRightBoxes() {
  return (
    <div className="flex gap-6 justify-center md:justify-end">
      {/* First small box */}

      <div
        style={{
          display: "flex",
          width: "131px",
          height: "252px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "var(--Corner-Radius-large, 24px)",
          background: "var(--UI-Color-On-Surface-on-gradient---2, #F3F4F6)",
        }}
      >
        {/* Your content here */}
      </div>

      {/* Second bigger box */}
      <div
        style={{
          display: "flex",
          width: "237px",
          height: "252px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "var(--Corner-Radius-large, 24px)",
          background: "var(--UI-Color-On-Surface-on-gradient---2, #F3F4F6)",
        }}
      >
        {/* Your content here */}
      </div>
    </div>
  );
}
