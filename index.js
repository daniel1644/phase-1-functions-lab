// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber < 42) {
      return 42 - blockNumber;
    } else {
      return blockNumber - 42;
    }
  }



  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }


  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination) * 264;
    return distance;
  }



  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264;
  
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400) {
      return (distance - 400) * 0.02;
    } else {
      return 0;
    }
  }