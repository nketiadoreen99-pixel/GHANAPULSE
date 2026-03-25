export default function AdBanner({ slot, className }: { slot: string; className?: string }) {
  return (
    <div className={`ad-slot ${className || ""}`}>
      <div className="text-center p-4">
        <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary font-medium">Advertisement</p>
        <p className="text-[10px] text-text-tertiary dark:text-dark-text-tertiary mt-0.5">{slot}</p>
        {/* Replace with Google AdSense code:
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          /> */}
      </div>
    </div>
  );
}
