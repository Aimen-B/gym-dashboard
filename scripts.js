document.addEventListener('DOMContentLoaded', function() {
   console.log('test')
// lockers data
const lockerData = [
    { id: 1, status: 'available' },
    { id: 2, status: 'unavailable' },
    { id: 3, status: 'available' },
    { id: 4, status: 'maintenance' },
    { id: 5, status: 'unavailable' },
    { id: 6, status: 'available' },
    { id: 7, status: 'maintenance' },
    { id: 8, status: 'unavailable' },
    { id: 9, status: 'available' },
    { id: 10, status: 'maintenance' },
    { id: 11, status: 'available' },
    { id: 12, status: 'unavailable' },
    { id: 13, status: 'available' },
    { id: 14, status: 'maintenance' },
    { id: 15, status: 'unavailable' },
    { id: 16, status: 'available' },
    { id: 17, status: 'maintenance' },
    { id: 18, status: 'unavailable' },
    { id: 19, status: 'available' },
    { id: 20, status: 'maintenance' },
    
  ];

  const lockerGrid = document.getElementById('lockerGrid');

  function generateLockerElement(locker) {
    const lockerElement = document.createElement('div');
    lockerElement.id = `locker-${locker.id}`;
    lockerElement.className = `h-40 w-40 relative bg-green-500`;

    const lockerNumber = document.createElement('span');
    lockerNumber.className = 'absolute inset-0 flex justify-center items-center text-white text-lg';
    lockerNumber.innerText = locker.id;

    const maintenanceButton = document.createElement('button');
    maintenanceButton.className = 'absolute top-2 right-2 p-1 text-white rounded-full fa-solid fa-triangle-exclamation fa-xl';
    maintenanceButton.style.color = '#ffdd00';


    
    maintenanceButton.addEventListener('click', () => toggleMaintenance(locker.id));

    lockerElement.appendChild(lockerNumber);
    lockerElement.appendChild(maintenanceButton);

    lockerGrid.appendChild(lockerElement);
    updateLockerStatus(locker.id, locker.status);
  }

  lockerData.forEach(locker => generateLockerElement(locker));

  function toggleMaintenance(lockerId) {
    const locker = lockerData.find(locker => locker.id === lockerId);
    if (locker) {
      locker.status = locker.status === 'maintenance' ? 'available' : 'maintenance';
      updateLockerStatus(lockerId, locker.status);
    }
  }

  function updateLockerStatus(lockerId, status) {
    const lockerElement = document.getElementById(`locker-${lockerId}`);
        if (lockerElement) {
            lockerElement.classList.remove('bg-green-500', 'bg-blue-500', 'bg-red-500');
        if (status === 'available') {
            lockerElement.classList.add('bg-green-500');
        } else if (status === 'unavailable') {
            lockerElement.classList.add('bg-blue-500');
        } else if (status === 'maintenance') {
            lockerElement.classList.add('bg-red-500');
        }
    }
  }



});
