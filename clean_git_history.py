import os
import subprocess

def run_command(command):
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    out, err = process.communicate()
    if process.returncode != 0:
        raise Exception(f"Command failed with error: {err.decode('utf-8')}")
    return out.decode('utf-8')

def main():
    # Filter the repository to remove sensitive data
    command = (
        'git filter-branch --force --index-filter '
        '"git rm --cached --ignore-unmatch src/components/Stickyform.jsx" '
        '--prune-empty --tag-name-filter cat -- --all'
    )
    print("Running filter-branch to remove sensitive data...")
    run_command(command)

    # Clean up the repository
    print("Running reflog expire and garbage collection...")
    run_command('git reflog expire --expire=now --all')
    run_command('git gc --prune=now --aggressive')

    print("Sensitive data removed. You can now force-push your changes.")

if __name__ == "__main__":
    main()
