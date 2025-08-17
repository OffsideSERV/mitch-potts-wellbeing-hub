import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [iframeHeight, setIframeHeight] = useState(1000);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      
      if (e.data.search('cliniko-bookings-resize') > -1) {
        const height = Number(e.data.split(':')[1]);
        setIframeHeight(height);
      }
      
      if (e.data.search('cliniko-bookings-page') > -1) {
        const iframe = document.getElementById('cliniko-25356803');
        iframe?.scrollIntoView();
      }

      // Listen for booking completion or success indicators
      if (e.data.search('cliniko-bookings-complete') > -1 || 
          e.data.search('booking-complete') > -1 ||
          e.data.search('appointment-booked') > -1 ||
          e.data.includes('thank') ||
          e.data.includes('success')) {
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 1000);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] max-h-[900px] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">Book Your MLS Laser Session</DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="flex-1 p-6 pt-0">
          <iframe 
            id='cliniko-25356803' 
            src='https://nxtlvl-health.au2.cliniko.com/bookings?business_id=1258316482023004823&practitioner_id=1258316476444580390&appointment_type_id=1262695176401328440&embedded=true' 
            frameBorder='0' 
            width='100%' 
            height={iframeHeight}
            style={{ pointerEvents: 'auto', minHeight: '600px' }}
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;