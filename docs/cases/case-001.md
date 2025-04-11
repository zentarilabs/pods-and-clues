# CASE 001: The Legacy Room 

Renzo read the final line of the training module on his laptop and let it settle in for a moment.

> *From servers to containers, one thing hasn’t changed — apps still need someone to think about how they run.*

A soft chime popped up in his terminal window.

> **ZENTARI SYSTEM NOTICE**  
> Cohort 4: Proceed to Simulation Wing – Sublevel 3  
> Challenge environment is now active.  
> No command line access required.

Before Renzo could react, Dev spun around in his chair.

> “Simulation wing?” he said, already standing. “We’re seriously doing the cool stuff this early?”

He was up before the message even fully finished displaying.

Renzo flicked his wrist, locking his screen with a practiced motion. He glanced once toward Dev’s laptop, still sitting open and glowing at the center table.

Zara stood smoothly. She paused, then slid her laptop into her tote bag. Screen off. One clean movement.

> “You always pack up like someone’s gonna steal your secrets,” Dev teased.

> “Because sometimes… they do,” Zara replied, already heading for the door.

Renzo followed them out, silent but alert.

---

### **Arrival – Zentari Simulation Wing**

The elevator opened onto Sublevel 3 — wide and polished, lined with light-traced panels that pulsed gently beneath their steps. The walls were embedded with low-glow panels, guiding them like a runway toward a set of tall, frosted-glass doors.

A glowing floor path blinked on in front of them.

> “Okay,” Dev said, eyes wide. “This feels like we’re about to beta test something that’s not technically approved for interns.”

Zara said nothing, but the corner of her mouth curved slightly.

As the doors opened, the words above them lit up:

> **LEGACY SIMULATION CHAMBER – COHORT 4**

---

### **Inside the Room**

Three curved sim stations faced the center of the chamber in a smooth arc.  
Above each one hovered a soft-blue holographic label:  
**Environment A**  
**Environment B**  
**Environment C**

A transparent central column rose from the floor, glowing with a slow swirl of data light — structured, elegant, alive.

Renzo slowed, taking in the room’s design. Purposeful. Balanced. It didn’t feel like a trap or a test — it felt like a *stage*.

> “This is definitely cooler than my home lab,” Dev muttered, running a hand along the curved edge of the nearest console.

---

### **Hiro Enters**

A nearby side door slid open quietly.

Hiro stepped through with a tablet in hand, nodding once in greeting.

> “Welcome to the Legacy Room,” he said. “Today, no commands. Just observations.”

He approached the center column and tapped its interface. The room reacted. Each station flickered on with data overlays and app visuals.

> “Each of these systems runs the same application — NovaMail. But each was built differently. You’ll see what happens when stress hits… and then you’ll tell me which one you trust.”

He turned away and began heading toward the observation deck — but paused as Dev looked around.

> “Wait,” Dev said, glancing behind them. “Where’s the tall girl?”

Right on cue, the door behind them opened again.

A girl stepped in — silver glasses, coiled braid, calm expression.

> “Bathroom,” she said simply.

> “Perfect timing,” Dev grinned. “We’re about to break fake infrastructure.”

She nodded once and took her place at the fourth console, saying nothing else.

Renzo glanced in her direction. Then turned back to the glowing simulation stations in front of them.

---

**The simulation was about to begin.**

The chamber lights dimmed slightly, adjusting focus toward the three simulation stations. Each display showed NovaMail’s dashboard — a sleek email client interface ticking along with clean, steady activity.

Above the visuals, system metrics scrolled calmly:
- CPU usage: Low
- Memory: Stable
- User sessions: Light and steady

A soft countdown appeared on the central column:  
**System Challenge Initiating in 10… 9… 8…**

Dev leaned closer. “Okay, this is totally gonna explode.”

> “It’s a stress test,” Zara said, arms crossed. “Nothing’s supposed to explode. It’s supposed to expose.”

Renzo didn’t say anything. He was watching Environment B — a VM-based instance — closely. Something about the response time felt… just slightly sluggish.

---

### **The Load Spike Begins**

The moment the countdown hit zero, everything shifted.

Suddenly, all three environments lit up in red. Alerts scrolled across the top of each station. A simulated user load had been injected into each NovaMail instance — mimicking thousands of concurrent users hitting the app all at once.

---

### **Environment A – Physical Server**

- CPU usage spiked to 95% within seconds  
- The app slowed, pages loaded with delay  
- Logs showed bottlenecked I/O and no scaling response  
- Status remained: **Running — Degraded**

> “This is like trying to serve pizza from one oven to a stadium,” Dev muttered.

---

### **Environment B – Virtual Machine**

- CPU began to spike, then plateaued at 70%  
- A second VM instance initiated… slowly  
- New users queued, seeing loading screens  
- App recovered after ~45 seconds  
- Status: **Recovering — Scaling In Progress**

Zara nodded. “At least it’s trying.”

---

### **Environment C – Containerized App**

- Spike registered and scaled horizontally within 5 seconds  
- Replica count increased from 1 to 6  
- CPU and memory stayed balanced  
- All user sessions stayed smooth  
- Status: **Healthy — Autoscaling Active**

Renzo leaned in. “It didn’t even blink.”

---

### **The Debrief Prompt Appears**

A new message lit up above the stations:

> **Challenge Complete. Please select the system you trust most — and why.**  
> **Responses will be monitored and discussed.**

Dev cracked his knuckles. “Okay, I *knew* the containers were gonna flex. But that was like… unfair.”

Zara tilted her head. “Not unfair. Just better suited. Lightweight, orchestrated, and fast to scale.”

She looked at Renzo. “What about you?”

Renzo hesitated, then tapped the display on Environment C.

> “It’s the only one that felt like it was designed to be interrupted.”

---

**The room went quiet. The simulation wound down.**  
The central column began cycling down into standby mode.

But before the lights fully shifted—

> —a **fourth station** appeared for just a moment. No label. No logs. Just a flicker.

Renzo’s eyes caught the motion.  
But before he could even blink, it vanished.

---

**He didn’t say a word.**

The sim stations powered down one by one, their glow fading into standby blue. The center column dimmed, leaving only the soft hum of the room’s core systems.

The interns gathered near the circular holo-table that had risen from the floor. No one told them to. Zentari had a way of nudging you without saying a word.

A prompt appeared in the air above the table:

> **Reflect on what you saw. What system would you choose — and why?**  
> **Speak clearly. You’re not just learning Kubernetes. You’re learning how systems think.**

Dev was the first to break the silence.

> “Okay, so. Containers were the obvious winner. Instant scaling, smooth recovery. But…”

He glanced at Environment B’s console still cooling in the background.

> “I weirdly respect the VM setup. It tried. Like, it *wanted* to handle it. It just… needed more time.”

Zara gave a short nod. “That’s the thing. VMs scale, but not fast enough for real-time demand. And physical servers—” she tilted her head toward Environment A, “—are like antique muscle cars. Strong. But they don’t bend.”

Renzo looked between the two of them, then down at the reflection of the holo-display in the table.

> “Containers didn’t just scale,” he said. “They recovered *before* users felt the impact. The system assumed failure was possible — and planned for it.”

That got Zara’s attention. She looked at him longer than usual, as if reevaluating something.  
Dev gave a low whistle. “Dang, okay Detective Renzo.”

---

### **Hiro Returns**

Footsteps echoed lightly as Hiro stepped back into the room. He hadn’t left completely — just far enough to watch without interrupting.

> “Good,” he said, eyes scanning their faces. “You saw not just what happened — but why it mattered.”

He tapped the table once, and the screen cleared.

> “Physical servers. Virtual machines. Containers. They’re not just tech. They’re mindsets. They tell you how their creators saw failure, growth, and control.”

He paused, letting the silence land.

> “You’ll be building with containers. But you’ll be troubleshooting all three.”

> “Lesson one,” he added, turning toward the door, “isn’t about performance. It’s about expectation. The right design doesn’t wait to be perfect — it plans to be interrupted.”

And with that, he left.

---

Dev exhaled and stretched.

> “Okay but—can we talk about how no one told us Hiro is like… Kubernetes Gandalf?”

Zara smirked. “He doesn’t wear robes.”

> “Yet.”

Renzo stayed quiet. But his eyes drifted once more to the row of sim stations.

Three consoles, powered down.

Only three.



