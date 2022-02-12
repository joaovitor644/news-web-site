

export =  consolreload

function consolreload(door: number,date: any){
    let d = 0
    let h = 0
    let m = 0
    let s = 0
    let dat = date
    let port = door
      setInterval(() => {
        console.clear()
        console.table(dat)
        console.log("run in http://localhost/"+ port)
        console.log(`Tempo de Execução: ${d}d ${h < 10? "0" + `${h}`: h}:${m < 10? "0" + `${m}`: m}:${s < 10? "0" + `${s}`: s}`);
        s++
        if(s > 59){
            s = 0;
            m++;
            if(m > 59){
                m = 0;
                h++;
                if(h > 59){
                    h = 0;
                    d++;
                }
            }
        }
    },1000)
  }