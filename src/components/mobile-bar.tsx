"use client";

import { CallButton } from "@/components/call-button";
import { DirectionsButton } from "@/components/directions-button";
import { useShopStatus } from "@/components/shop-status";

export function MobileBar() {
  const status = useShopStatus();
  const closed = status?.isOpen === false && Boolean(status.closedNotice);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 shadow-[0_-12px_40px_rgba(12,31,64,0.12)] backdrop-blur print:hidden md:hidden">
      {closed && (
        <p className="px-4 pt-2.5 text-center text-xs font-medium leading-snug text-ink">
          {status?.closedNotice}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <CallButton placement="bar" />
        <DirectionsButton placement="bar" />
      </div>
    </div>
  );
}
