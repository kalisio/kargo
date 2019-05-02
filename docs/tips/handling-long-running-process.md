---
sidebarDepth: 3
---

# Handling long-running process

When executing a long-running process, your SSH connection can be shut down causing the process to stop. To avoid this problem, one solution is to use [screen](https://en.wikipedia.org/wiki/GNU_Screen). 

Here are the basics to know:
1. Create a screen: `sreen -S my-session`
2. Launch your process: `execute my long process`
3. Leave your screen: `[ctrl]+[a]` then `[d]`
4. List the screens: `screen -ls`
5. Going back to your screen: `screen -r my-session`

Check the [doc](https://www.gnu.org/software/screen/manual/screen.html) to learn more.
