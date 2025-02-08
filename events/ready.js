const { ActivityType } = require('discord.js');
const colors = require('../UI/colors/colors');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
  
        const activities = [
            { name: '繁栄と許しを祈ります...' },
        ];

     
        const statuses = ['online'];

     
        let currentStatusIndex = 0;

 
        function setStatus() {
        
            const status = statuses[currentStatusIndex];

          
            client.user.setPresence({
                status: status,
            });

            
            currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
        }

        
        setTimeout(() => {
            setStatus();
            console.log('\n' + '─'.repeat(40));
            console.log(`${colors.magenta}${colors.bright}🔗  ACTIVITY STATUS${colors.reset}`);
            console.log('─'.repeat(40));
            console.log('\x1b[31m[ CORE ]\x1b[0m \x1b[32m%s\x1b[0m', 'Bot Activity Set Successful ✅');
        }, 2000);

        setInterval(() => {
            setActivityAndStatus();
        }, 6000);
    },
};
